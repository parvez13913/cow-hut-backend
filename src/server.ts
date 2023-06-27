import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './app/modules/shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🛢🛢 Database is Connected Successfully')
    app.listen(config.port, () => {
      logger.info(`Database listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Fail to connect Database', error)
  }
}
bootstrap()
