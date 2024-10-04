
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'AccountCreationSuccess': typeof import("../components/AccountCreationSuccess.vue")['default']
    'AuthCarousel': typeof import("../components/AuthCarousel.vue")['default']
    'Carousel': typeof import("../components/Carousel.vue")['default']
    'CreatePasscodeForm': typeof import("../components/CreatePasscodeForm.vue")['default']
    'CreatePassword': typeof import("../components/CreatePassword.vue")['default']
    'DashboardOverview': typeof import("../components/DashboardOverview.vue")['default']
    'ExistingUserLogin': typeof import("../components/ExistingUserLogin.vue")['default']
    'ForgotPassword': typeof import("../components/ForgotPassword.vue")['default']
    'ForgotPasswordVerificationForm': typeof import("../components/ForgotPasswordVerificationForm.vue")['default']
    'LoginForm': typeof import("../components/LoginForm.vue")['default']
    'PasscodeRecoveryForm': typeof import("../components/PasscodeRecoveryForm.vue")['default']
    'PasswordRecovery': typeof import("../components/PasswordRecovery.vue")['default']
    'ReEnterPinForm': typeof import("../components/ReEnterPinForm.vue")['default']
    'SignupForm': typeof import("../components/SignupForm.vue")['default']
    'SignupSuccess': typeof import("../components/SignupSuccess.vue")['default']
    'TransactionPinSetup': typeof import("../components/TransactionPinSetup.vue")['default']
    'UserLogin': typeof import("../components/UserLogin.vue")['default']
    'VerificationForm': typeof import("../components/VerificationForm.vue")['default']
    'CoreBaseModal': typeof import("../components/core/BaseModal.vue")['default']
    'CoreCountryCodeModal': typeof import("../components/core/CountryCodeModal.vue")['default']
    'CoreToast': typeof import("../components/core/Toast.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAccountCreationSuccess': typeof import("../components/AccountCreationSuccess.vue")['default']
    'LazyAuthCarousel': typeof import("../components/AuthCarousel.vue")['default']
    'LazyCarousel': typeof import("../components/Carousel.vue")['default']
    'LazyCreatePasscodeForm': typeof import("../components/CreatePasscodeForm.vue")['default']
    'LazyCreatePassword': typeof import("../components/CreatePassword.vue")['default']
    'LazyDashboardOverview': typeof import("../components/DashboardOverview.vue")['default']
    'LazyExistingUserLogin': typeof import("../components/ExistingUserLogin.vue")['default']
    'LazyForgotPassword': typeof import("../components/ForgotPassword.vue")['default']
    'LazyForgotPasswordVerificationForm': typeof import("../components/ForgotPasswordVerificationForm.vue")['default']
    'LazyLoginForm': typeof import("../components/LoginForm.vue")['default']
    'LazyPasscodeRecoveryForm': typeof import("../components/PasscodeRecoveryForm.vue")['default']
    'LazyPasswordRecovery': typeof import("../components/PasswordRecovery.vue")['default']
    'LazyReEnterPinForm': typeof import("../components/ReEnterPinForm.vue")['default']
    'LazySignupForm': typeof import("../components/SignupForm.vue")['default']
    'LazySignupSuccess': typeof import("../components/SignupSuccess.vue")['default']
    'LazyTransactionPinSetup': typeof import("../components/TransactionPinSetup.vue")['default']
    'LazyUserLogin': typeof import("../components/UserLogin.vue")['default']
    'LazyVerificationForm': typeof import("../components/VerificationForm.vue")['default']
    'LazyCoreBaseModal': typeof import("../components/core/BaseModal.vue")['default']
    'LazyCoreCountryCodeModal': typeof import("../components/core/CountryCodeModal.vue")['default']
    'LazyCoreToast': typeof import("../components/core/Toast.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AccountCreationSuccess: typeof import("../components/AccountCreationSuccess.vue")['default']
export const AuthCarousel: typeof import("../components/AuthCarousel.vue")['default']
export const Carousel: typeof import("../components/Carousel.vue")['default']
export const CreatePasscodeForm: typeof import("../components/CreatePasscodeForm.vue")['default']
export const CreatePassword: typeof import("../components/CreatePassword.vue")['default']
export const DashboardOverview: typeof import("../components/DashboardOverview.vue")['default']
export const ExistingUserLogin: typeof import("../components/ExistingUserLogin.vue")['default']
export const ForgotPassword: typeof import("../components/ForgotPassword.vue")['default']
export const ForgotPasswordVerificationForm: typeof import("../components/ForgotPasswordVerificationForm.vue")['default']
export const LoginForm: typeof import("../components/LoginForm.vue")['default']
export const PasscodeRecoveryForm: typeof import("../components/PasscodeRecoveryForm.vue")['default']
export const PasswordRecovery: typeof import("../components/PasswordRecovery.vue")['default']
export const ReEnterPinForm: typeof import("../components/ReEnterPinForm.vue")['default']
export const SignupForm: typeof import("../components/SignupForm.vue")['default']
export const SignupSuccess: typeof import("../components/SignupSuccess.vue")['default']
export const TransactionPinSetup: typeof import("../components/TransactionPinSetup.vue")['default']
export const UserLogin: typeof import("../components/UserLogin.vue")['default']
export const VerificationForm: typeof import("../components/VerificationForm.vue")['default']
export const CoreBaseModal: typeof import("../components/core/BaseModal.vue")['default']
export const CoreCountryCodeModal: typeof import("../components/core/CountryCodeModal.vue")['default']
export const CoreToast: typeof import("../components/core/Toast.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAccountCreationSuccess: typeof import("../components/AccountCreationSuccess.vue")['default']
export const LazyAuthCarousel: typeof import("../components/AuthCarousel.vue")['default']
export const LazyCarousel: typeof import("../components/Carousel.vue")['default']
export const LazyCreatePasscodeForm: typeof import("../components/CreatePasscodeForm.vue")['default']
export const LazyCreatePassword: typeof import("../components/CreatePassword.vue")['default']
export const LazyDashboardOverview: typeof import("../components/DashboardOverview.vue")['default']
export const LazyExistingUserLogin: typeof import("../components/ExistingUserLogin.vue")['default']
export const LazyForgotPassword: typeof import("../components/ForgotPassword.vue")['default']
export const LazyForgotPasswordVerificationForm: typeof import("../components/ForgotPasswordVerificationForm.vue")['default']
export const LazyLoginForm: typeof import("../components/LoginForm.vue")['default']
export const LazyPasscodeRecoveryForm: typeof import("../components/PasscodeRecoveryForm.vue")['default']
export const LazyPasswordRecovery: typeof import("../components/PasswordRecovery.vue")['default']
export const LazyReEnterPinForm: typeof import("../components/ReEnterPinForm.vue")['default']
export const LazySignupForm: typeof import("../components/SignupForm.vue")['default']
export const LazySignupSuccess: typeof import("../components/SignupSuccess.vue")['default']
export const LazyTransactionPinSetup: typeof import("../components/TransactionPinSetup.vue")['default']
export const LazyUserLogin: typeof import("../components/UserLogin.vue")['default']
export const LazyVerificationForm: typeof import("../components/VerificationForm.vue")['default']
export const LazyCoreBaseModal: typeof import("../components/core/BaseModal.vue")['default']
export const LazyCoreCountryCodeModal: typeof import("../components/core/CountryCodeModal.vue")['default']
export const LazyCoreToast: typeof import("../components/core/Toast.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
