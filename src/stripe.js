const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_kfycPlsK2S5nbrLMcFdoxriD006UR2lB7g'
  : 'pk_test_kfycPlsK2S5nbrLMcFdoxriD006UR2lB7g';

export default STRIPE_PUBLISHABLE;