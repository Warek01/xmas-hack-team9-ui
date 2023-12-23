declare global {
  namespace NodeJS {
    interface ProcessEnv extends AppEnv {}
  }
}

export interface AppEnv {}
