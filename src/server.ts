import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    // eslint-disable-next-line no-console
    console.log('🛢🛢 Database is Connected Successfully')
    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Database listening on port ${config.port}`)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Fail to connect Database', error)
  }
}
bootstrap()
