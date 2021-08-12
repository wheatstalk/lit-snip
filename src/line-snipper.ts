export interface LineSnipperOptions {
  readonly language?: string;
}

export class LineSnipper {
  private readonly language: string;
  private snipping: boolean = false;
  private indent: number = 0;

  constructor(options: LineSnipperOptions = {}) {
    this.language = options.language ?? 'ts';
  }

  snipLine(line: string): string|undefined {
    if (/::SNIP/.test(line)) {
      this.snipping = true;
      this.indent = line.indexOf('//');
      return '```' + this.language;
    } else if (/::END-SNIP/.test(line)) {
      this.snipping = false;
      return '```';
    } else if (this.snipping) {
      return line.slice(this.indent);
    } else {
      return undefined;
    }
  }
}