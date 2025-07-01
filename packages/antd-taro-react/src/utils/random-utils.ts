export class RandomUtils {
  static random = () => {
    return 'tr' + Math.random().toString(16).slice(2);
  };
}
