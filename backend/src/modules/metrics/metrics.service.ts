export interface MetricPayload {
  service: string;
  endpoint: string;
  method: string;
  statusCode: number;
  responseTime: number;
  timestamp?: string;
}

export const ingestMetric = async (payload: MetricPayload) => {
  const event = {
    eventId: crypto.randomUUID(),
    ...payload,
    timestamp: payload.timestamp ?? new Date().toISOString(),
  };

  // Later:
  // await kafkaProducer.publish("metrics.raw", event);

  return event;
};
