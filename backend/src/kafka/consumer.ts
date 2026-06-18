import { kafka } from "../config/kafka";

export const consumer = kafka.consumer({
    groupId:'analytics-group'
});

export const startConsumer = async ()=> {
    await consumer.connect();
    await consumer.subscribe({
        topic: "metrics",
        fromBeginning: true,
    });

    await consumer.run({
        eachMessage: async({topic, message}) => {
            console.log("Topic: ", topic);
            console.log("Message: ", message.value?.toString())
        }
    })
}