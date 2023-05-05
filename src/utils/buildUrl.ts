import getConfig from "next/config";

/**
 * github pagesに公開時にアセットを読み込めるようにするため、
 * 環境変数を見てURLにリポジトリ名を追加する
 */
export function buildUrl(path: string): string {
  const {
    publicRuntimeConfig,
  }: {
    publicRuntimeConfig: { root: string };
  } = getConfig();

  return publicRuntimeConfig.root + path;
}

export const CDNUrl = (p: string) => "https://qiniu1.lxfriday.xyz/common" + p;
