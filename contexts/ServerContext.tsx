import { createContext, FunctionComponent, ReactNode } from 'react';
import Constants from 'expo-constants';

function getConstants() {
  // @ts-ignore
  const { extra } = Constants.manifest;
  const { environment } = extra;
  if (environment === 'dev') return `${extra.dev_url}:${extra.dev_port}`;
  return ``;
}

export const ServerContext = createContext('');

const ServerProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const serverValue = getConstants();

  return (
    <ServerContext.Provider value={serverValue}>
      {children}
    </ServerContext.Provider>
  )
}

export default ServerProvider;
