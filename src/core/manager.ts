export abstract class Manager {
  abstract tick(input: number): void;
  abstract tickInput: string;
}
