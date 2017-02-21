import each from 'lodash/each'

export function sleepAll(cats) {
    each(cats, cat => cat.sleep());
}
