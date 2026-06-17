import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: 'real-time-analytics',
    brokers: ["localhost:9092"],
});