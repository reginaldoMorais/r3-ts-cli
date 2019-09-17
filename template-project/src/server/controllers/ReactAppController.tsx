import { Request, Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import InternalServerException from '../exceptions/InternalServerException';
import template from '../templates/template';
import { createServerStore } from '../../app/redux/store';
import ReactAppService from '../services/ReactAppService';

import Controller from '../../app/view/controller/ControllerContainer';

class ReactAppController {
  async render(req: Request, res: Response) {
    const env = process.env.NODE_ENV || 'development';
    const service = new ReactAppService();
    const initalState = await service.createInitialState(req);
    const context = {
      url: '',
    };

    const store = createServerStore(initalState);
    const sheet = new ServerStyleSheet();
    let html = ``;
    let styleTags = ``;

    try {
      html = renderToString(
        <StyleSheetManager sheet={sheet.instance}>
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <Controller />
            </StaticRouter>
          </Provider>
        </StyleSheetManager>,
      );
      styleTags = sheet.getStyleTags();
    } catch (err) {
      new InternalServerException(err);
      res.sendStatus(500);
    } finally {
      sheet.seal();
    }

    if (context.url) {
      res.redirect(context.url);
      return;
    }

    res.status(200).send(template(html, styleTags, initalState, env));
  }
}

export default new ReactAppController();
