import { create } from '@storybook/theming';
import logo from './rex-logo.svg';
import { name, repository } from '../../package.json';

export default create({
  base: 'light',
  // UI
  appBg: '#F7F7F7',
  // Typography
  fontBase: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif',
  // Text colors
  textColor: '#333333',
  brandTitle: name,
  brandUrl: repository.url,
  brandImage: logo,
});
