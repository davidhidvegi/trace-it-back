interface BuildConfig {
    serve: {
      enable: boolean;
      http: {
        enable: boolean;
        https: {
          enable: boolean;
        };
      };
    };
  }
  
  interface Config {
    build: BuildConfig;
    index: string;
    public: string;
  }
  
  const config: Config = {
    build: {
      serve: {
        enable: true,
        http: {
          enable: true,
          https: {
            enable: true,
          },
        },
      },
    },
    index: 'index.html',
    public: 'public',
  };
  
  export default config;