import { kafka } from "../config/kafka";
import logger from "../config/logger";

export const producer = kafka.producer();

export const connectProducer = async () => {
    await producer.connect();
    logger.info("Producer connected");
}

export const sendMessage = async (topic: string, message: unknown) => {
    await producer.send({
        topic,
        messages:[
            {
                value: JSON.stringify(message),
            }
        ]
    })
};