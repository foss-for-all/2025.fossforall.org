import { defineMiddleware, sequence } from "astro:middleware";
import { middleware, prefixDefaultLocale, redirectToDefaultLocale, requestHasLocale } from "astro:i18n"; // function available with `manual` routing

export const wow = defineMiddleware(async (ctx, next) => {
  if (requestHasLocale(ctx)) {
    return next();
  } else {
    return redirectToDefaultLocale(ctx, 301);
  }
})

export const onRequest = sequence(wow, middleware({
  prefixDefaultLocale: true,
  redirectToDefaultLocale: false
}))
