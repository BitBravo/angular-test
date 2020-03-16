// antd theme variables for light theme
// ref: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

module.exports = {
	'@white': '#ffffff',
	'@black': '#141322',
	'@gray-1': '#f0f2f4',
	'@gray-2': '#e4e9f0',
	'@gray-3': '#d9dee9',
	'@gray-4': '#c8c4db',
	'@gray-6': '#595c97',
	'@blue': 'var(--color-primary)', // see core/mixins.scss
	'@blue-light': '#42baf9',
	'@red': '#f5222e',
	'@green': '#41b883',
	'@orange': '#faad15',

	// '@font-family': 'var(--font-family)',

	'@text-color': '@gray-6',
	'@primary-color': '@blue',
	'@info-color': '@blue',
	'@success-color': '@green',
	'@processing-color': '@blue',
	'@error-color': '@red',
	'@highlight-color': '@red',
	'@warning-color': '@orange',
	'@normal-color': '@gray-3',

	'@body-background': '@white',
	'@component-background': '@white',
	'@heading-color': '@gray-6',

	'@layout-body-background': 'transparent',
	'@layout-header-background': 'transparent',
	'@layout-footer-background': 'transparent',

	'@border-color-base': '@gray-2',
	'@border-color-split': '@gray-2',
	'@border-color-inverse': '@white',
	// '@border-radius-base': '2px',
	'@disabled-color': '@gray-4',
	'@disabled-bg': '@gray-2',

	'@btn-primary-color': '@white',
	'@btn-primary-bg': '@blue',
	'@btn-default-color': '@gray-6',
	'@btn-default-bg': '@white',
	'@btn-danger-color': '@white',
	'@btn-danger-bg': '@red',
	'@btn-danger-border': '@red',

	'@link-color': '@blue',
	'@link-hover-color': '@blue-light',
	'@link-active-color': '@blue-light',

	'@item-active-bg': '@gray-2',
	'@item-hover-bg': '@gray-2',

	'@input-placeholder-color': 'lighten(@gray-6, 10%)',
	'@input-color': '@gray-6',
	'@input-addon-bg': '@gray-1',
	'@input-bg': '@white',
	'@input-border-color': '@gray-2',

	'@alert-success-border-color': '#b7eb8f',
	'@alert-success-bg-color': '#f6ffed',
	'@alert-success-icon-color': '@green',
	'@alert-info-border-color': '#91d5ff',
	'@alert-info-bg-color': '#e6f7ff',
	'@alert-info-icon-color': '@blue',
	'@alert-warning-border-color': '#ffe58f',
	'@alert-warning-bg-color': '#fffbe6',
	'@alert-warning-icon-color': '@orange',
	'@alert-error-border-color': '#ffa39e',
	'@alert-error-bg-color': '#fff1f0',
	'@alert-error-icon-color': '@red',

	'@tabs-hover-color': '@blue-light',
	'@tabs-active-color': '@blue',
	'@tabs-card-active-color': '@blue',
	'@tabs-ink-bar-color': '@blue',
	'@tabs-highlight-color': '@blue',

	'@table-header-bg': '@gray-1',
	'@table-header-color': '@gray-6',
	'@table-footer-bg': '@gray-1',
	'@table-footer-color': '@gray-6',
	'@table-row-hover-bg': '@gray-2',
	'@table-selected-row-bg': '@gray-1',
	'@table-expanded-row-bg': '@gray-1',

	'@label-required-color': '@red',
	'@label-color': '@gray-6',
};
