export const fileExtensions = ['.json', '.arb'];

export const parse = (content: string): Promise<any | undefined> => {
  try {
    return JSON.parse(content);
  } catch (e) {
    return Promise.resolve(undefined);
  }
};

export const serialize = async (data: object): Promise<string | undefined> => {
  try {
    return JSON.stringify(data, null, 2);
  } catch (e) {
    return undefined;
  }
};
