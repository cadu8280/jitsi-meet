const userAgent = navigator.userAgent;
let OS;

if (userAgent.match(/Android/i)) {
    OS = 'android';
} else if (userAgent.match(/iP(ad|hone|od)/i)) {
    OS = 'ios';
}

/**
 * Provides a minimal equivalent of react-native's Platform abstraction.
 */
export default {
    /**
     * The operating system on which the application is executing.
     *
     * @type {string}
     */
    OS
};
