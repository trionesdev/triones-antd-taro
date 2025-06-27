export class RandomUtils {
  static random = () => {
    return 't_r_' + Math.random().toString(16).slice(2);
  };
}
