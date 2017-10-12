import { install } from './install'

export default class Seed {
    static install: () => void;
}

Seed.install = install;