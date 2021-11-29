import * as Logger from 'bunyan'
import { LoggerFactory } from './utility/logger/logger'

class CustomerService {

    private readonly logger: Logger
  
    constructor(loggerFactory: LoggerFactory) {
      this.logger = loggerFactory.getNamedLogger('CustomerService')
    }
  
    public logTest(): void {
      this.logger.debug('Display debug level logs here', { customerService: 'logTest' })
      this.logger.info('Display info level logs here', { customerService: 'logTest' })
      this.logger.warn('Display warn level logs here', { customerService: 'logTest' })
      this.logger.error('Display error level logs here', { customerService: 'logTest' })
    }
  }
  
  export { CustomerService }