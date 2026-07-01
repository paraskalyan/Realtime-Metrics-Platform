import { kafka } from "../config/kafka";
import logger from "../config/logger";

export const producer = kafka.producer();

// Connect the producer to kafka
export const connectProducer = async () => {
    await producer.connect();
    logger.info("Producer connected");
}

// Use this to send message to kafka
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