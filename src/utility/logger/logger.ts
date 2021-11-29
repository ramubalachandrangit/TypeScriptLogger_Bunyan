import * as Logger from 'bunyan'


class LoggerFactory {
    protected logger: Logger
  
    constructor() {     

      const options: Logger.LoggerOptions = {
        name: "Boca Logger",
        level: 'info',
        serializers: Logger.stdSerializers,
        // streams: [
        //   {
        //     type: 'raw',
        //     stream: loggly
        //   }]
      }  
      this.logger = Logger.createLogger(options)
    }
  
    /**
     * Gets a child instance of a logger with specific name
     */
    public getNamedLogger(loggerName: string): Logger {
      return this.logger.child({ loggerName })
    }
  }
  
  export { LoggerFactory }