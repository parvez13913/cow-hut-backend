import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './app/modules/shared/logger'
import { Server } from 'http'

async function bootstrap() {
  let server: Server
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🛢🛢 Database is Connected Successfully')
    server = app.listen(config.port, () => {
      logger.info(`Database listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Fail to connect Database', error)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    }
  })
}
bootstrap()
