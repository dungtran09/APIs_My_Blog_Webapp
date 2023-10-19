export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: number | string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  test: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}
