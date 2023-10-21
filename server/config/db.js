import { connect } from 'mongoose';
import 'dotenv/config'

const connectDB = async () => {
    try {
        await connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('ok')
    } catch (err) {
        console.error(err);
    }
}

export default connectDB