const REPLY_DOMAIN = process.env.REPLY_DOMAIN ?? "reply.suewheelerstl.com";

export function threadReplyTo(replyToken: string): string {
  return `thread-${replyToken}@${REPLY_DOMAIN}`;
}
