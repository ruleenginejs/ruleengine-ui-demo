const components = import.meta.globEager("./component-*.js");
const codes = [];

for (const [, componentConfig] of Object.entries(components)) {
  codes.push.apply(codes, componentConfig.default);
}

export default codes;
