import { Serializer as ChatBotMessageSerializer } from
  '../mixins/regenerated/serializers/t-v-single-spa-sample-chat-bot-message';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ChatBotMessageSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
