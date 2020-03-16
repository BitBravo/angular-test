// antd theme variables for dark theme
// ref: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

module.exports = {
	'@white': '#ffffff',
	'@black': '#141322',
	'@gray-dark-1': '#aeaee0',
	'@gray-dark-2': '#7575a3',
	'@gray-dark-4': '#232135',
	'@gray-dark-6': '#0c0c1b',
	'@blue': 'var(--color-primary)', // see core/mixins.scss
	'@blue-light': '#42baf9',
	'@red': '#f5222e',
	'@green': '#41b883',
	'@orange': '#faad15',

	// '@font-family': 'var(--font-family)',

	'@text-color': '@gray-dark-1',
	'@primary-color': '@blue',
	'@info-color': '@blue-light',
	'@success-color': '@green',
	'@processing-color': '@blue',
	'@error-color': '@red',
	'@highlight-color': '@red',
	'@warning-color': '@red',
	'@normal-color': '@gray-dark-1',

	'@body-background': '@black',
	'@component-background': '@gray-dark-4',
	'@heading-color': '@white',

	'@layout-body-background': 'transparent',
	'@layout-header-background': 'transparent',
	'@layout-footer-background': 'transparent',

	'@border-color-base': '@gray-dark-4',
	'@border-color-split': '@gray-dark-4',
	'@border-color-inverse': '@gray-dark-4',
	// '@border-radius-base': '2px',
	'@disabled-color': 'darken(@gray-dark-2, 7%)',
	'@disabled-bg': 'darken(@gray-dark-4, 3%)',

	'@btn-primary-color': '@white',
	'@btn-primary-bg': '@blue',
	'@btn-default-color': '@white',
	'@btn-default-bg': '@gray-dark-4',
	'@btn-danger-color': '@white',
	'@btn-danger-bg': '@red',
	'@btn-danger-border': '@red',

	'@link-color': '@white',
	'@link-hover-color': '@blue',
	'@link-active-color': '@blue-light',

	'@item-active-bg': 'lighten(@gray-dark-4, 7%)',
	'@item-hover-bg': 'lighten(@gray-dark-4, 7%)',

	'@input-placeholder-color': '@gray-dark-2',
	'@input-color': '@gray-dark-1',
	'@input-addon-bg': 'lighten(@gray-dark-4, 7%)',
	'@input-bg': '@gray-dark-4',
	'@input-border-color': '@gray-dark-4',

	'@alert-success-border-color': '@gray-dark-4',
	'@alert-success-bg-color': '@gray-dark-4',
	'@alert-success-icon-color': '@green',
	'@alert-info-border-color': '@gray-dark-4',
	'@alert-info-bg-color': '@gray-dark-4',
	'@alert-info-icon-color': '@blue',
	'@alert-warning-border-color': '@gray-dark-4',
	'@alert-warning-bg-color': '@gray-dark-4',
	'@alert-warning-icon-color': '@orange',
	'@alert-error-border-color': '@gray-dark-4',
	'@alert-error-bg-color': '@gray-dark-4',
	'@alert-error-icon-color': '@red',

	'@tabs-hover-color': '@blue',
	'@tabs-active-color': '@blue',
	'@tabs-card-active-color': '@blue',
	'@tabs-ink-bar-color': '@blue',
	'@tabs-highlight-color': '@blue',

	'@table-header-bg': '@gray-dark-4',
	'@table-header-color': '@gray-dark-1',
	'@table-footer-bg': '@gray-dark-4',
	'@table-footer-color': '@gray-dark-1',
	'@table-row-hover-bg': 'darken(@gray-dark-4, 4%)',
	'@table-selected-row-bg': '@gray-dark-4',
	'@table-expanded-row-bg': '@gray-dark-4',

	'@label-required-color': '@gray-dark-1',
	'@label-color': '@gray-dark-1',
};
