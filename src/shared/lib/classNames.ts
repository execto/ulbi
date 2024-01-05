type Mods = Record<string, string | boolean>;

export const classNames = (
  cls: string,
  mods: Mods,
  additional: Array<string | undefined>
): string => {
  return [
    ...(cls?.length === 0 ? [] : [cls]),
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
