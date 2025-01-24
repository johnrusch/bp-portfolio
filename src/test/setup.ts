import { expect, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!doctype html><html><body></body></html>')
global.document = dom.window.document
global.window = dom.window as unknown as Window & typeof globalThis
global.navigator = dom.window.navigator

expect.extend(matchers)
