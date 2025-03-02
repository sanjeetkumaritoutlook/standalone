import config from '../../auth_config.json';

const { domain, clientId, audience, apiUri, errorPath } = config as {
  domain: string;
  clientId: string;
  audience?: string;
  apiUri: string;
  errorPath: string;
};

//line 17 : API identifier replaced
export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    ...(audience && audience !== "lE5ismB9fevKPQcC514UHEJJ2hFkunIJ" ? { audience } : null),
    redirectUri: window.location.origin,
    errorPath,
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};
