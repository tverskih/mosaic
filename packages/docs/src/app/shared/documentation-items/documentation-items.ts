/* tslint:disable:naming-convention */
import { Injectable } from '@angular/core';


export interface DocItem {
    id: string;
    name: string;
    summary?: string;
    packageName?: string;
    examples?: string[];
}

export interface DocCategory {
    id: string;
    name: string;
    items: DocItem[];
    summary?: string;
}

export interface DocSection {
    name: string;
    summary: string;
}

const COMPONENTS = 'components';
export const SECTIONS: { [key: string]: DocSection } = {
    [COMPONENTS]: {
        name: 'Components',
        summary: 'Summary for components.'
    }
};


const DOCS: { [key: string]: DocCategory[] } = {
    [COMPONENTS]: [
        {
            id: 'forms',
            name: 'Form Controls',
            summary: 'Controls that collect and validate user input.',
            items: [
                {
                    id: 'autocomplete',
                    name: 'Autocomplete',
                    summary: 'Suggests relevant options as the user types.',
                    examples: [
                        'autocomplete-overview',
                        'autocomplete-simple',
                        'autocomplete-display',
                        'autocomplete-filter',
                        'autocomplete-optgroup',
                        'autocomplete-auto-active-first-option'
                    ]
                },
                {
                    id: 'checkbox',
                    name: 'Checkbox',
                    summary: 'Captures boolean input with an optional indeterminate mode.',
                    examples: ['checkbox-configurable']
                },
                {
                    id: 'datepicker',
                    name: 'Datepicker',
                    summary: 'Captures dates, agnostic about their internal representation.',
                    examples: [
                        'datepicker-overview',
                        'datepicker-start-view',
                        'datepicker-value',
                        'datepicker-min-max',
                        'datepicker-filter',
                        'datepicker-events',
                        'datepicker-disabled',
                        'datepicker-touch',
                        'datepicker-api',
                        'datepicker-locale',
                        'datepicker-moment',
                        'datepicker-formats'

                    ]
                },
                {
                    id: 'form-field',
                    name: 'Form field',
                    summary: 'Wraps input fields so they are displayed consistently.',
                    examples: [
                        'form-field-overview',
                        'form-field-label',
                        'form-field-appearance',
                        'form-field-hint',
                        'form-field-error',
                        'form-field-prefix-suffix',
                        'form-field-theming',
                        'form-field-custom-control'
                    ]
                },
                {
                    id: 'input',
                    name: 'Input',
                    summary: 'Enables native inputs to be used within a Form field.',
                    examples: [
                        'input-overview',
                        'input-error-state-matcher',
                        'text-field-autosize-textarea',
                        'input-clearable',
                        'input-errors',
                        'input-form',
                        'input-hint',
                        'input-prefix-suffix'
                    ]
                },
                {
                    id: 'radio',
                    name: 'Radio button',
                    summary: 'Allows the user to select one option from a group.',
                    examples: ['radio-ng-model']
                },
                {
                    id: 'select',
                    name: 'Select',
                    summary: 'Allows the user to select one or more options using a dropdown.',
                    examples: [
                        'select-overview',
                        'select-value-binding',
                        'select-form',
                        'select-hint-error',
                        'select-disabled',
                        'select-reset',
                        'select-optgroup',
                        'select-multiple',
                        'select-custom-trigger',
                        'select-no-ripple',
                        'select-panel-class',
                        'select-error-state-matcher'
                    ]
                },
                {
                    id: 'slider',
                    name: 'Slider',
                    summary: 'Allows the user to input a value by dragging along a slider.',
                    examples: ['slider-configurable']
                },
                {
                    id: 'slide-toggle',
                    name: 'Slide toggle',
                    summary: 'Captures boolean values as a clickable and draggable switch.',
                    examples: ['slide-toggle-configurable']
                }
            ]
        },
        {
            id: 'nav',
            name: 'Navigation',
            summary: 'Menus, sidenavs and toolbars that organise your content.',
            items: [
                {
                    id: 'menu',
                    name: 'Menu',
                    summary: 'A floating panel of nestable options.',
                    examples: [
                        'menu-overview',
                        'menu-icons',
                        'nested-menu'
                    ]
                },
                {
                    id: 'sidenav',
                    name: 'Sidenav',
                    summary: 'A container for content that is fixed to one side of the screen.',
                    examples: [
                        'sidenav-overview',
                        'sidenav-drawer-overview',
                        'sidenav-position',
                        'sidenav-open-close',
                        'sidenav-mode',
                        'sidenav-disable-close',
                        'sidenav-autosize',
                        'sidenav-fixed',
                        'sidenav-responsive'
                    ]
                },
                {
                    id: 'toolbar',
                    name: 'Toolbar',
                    summary: 'A container for top-level titles and controls.',
                    examples: ['toolbar-multirow']
                }
            ]
        },
        {
            id: 'layout',
            name: 'Layout',
            summary: 'Essential building blocks for presenting your content.',
            items: [
                {
                    id: 'card',
                    name: 'Card',
                    summary: 'A styled container for pieces of itemized content.',
                    examples: ['card-fancy']
                },
                {
                    id: 'divider',
                    name: 'Divider',
                    summary: 'A vertical or horizontal visual divider.',
                    examples: ['divider-overview']
                },
                {
                    id: 'expansion',
                    name: 'Expansion Panel',
                    summary: 'A container which can be expanded to reveal more content.',
                    examples: ['expansion-overview', 'expansion-steps']
                },
                {
                    id: 'grid-list',
                    name: 'Grid list',
                    summary: 'A flexible structure for presenting content items in a grid.',
                    examples: ['grid-list-dynamic']
                },
                {
                    id: 'list',
                    name: 'List',
                    summary: 'Presents conventional lists of items.',
                    examples: ['list-sections']
                },
                {
                    id: 'stepper',
                    name: 'Stepper',
                    summary: 'Presents content as steps through which to progress.',
                    examples: ['stepper-overview']
                },
                {
                    id: 'tabs',
                    name: 'Tabs',
                    summary: 'Only presents one view at a time from a provided set of views.',
                    examples: [
                        'tab-group-basic',
                        'tab-group-custom-label',
                        'tab-group-dynamic-height',
                        'tab-group-dynamic',
                        'tab-group-header-below',
                        'tab-group-lazy-loaded',
                        'tab-group-stretched',
                        'tab-group-theme',
                        'tab-group-async',
                        'tab-nav-bar-basic'
                    ]
                },
                {
                    id: 'tree',
                    name: 'Tree',
                    summary: 'Presents hierarchical content as an expandable tree.',
                    examples: [
                        'tree-dynamic',
                        'tree-flat-overview',
                        'tree-checklist',
                        'tree-nested-overview',
                        'tree-loadmore'
                    ]
                }
            ]
        },
        {
            id: 'buttons',
            name: 'Buttons & Indicators',
            summary: 'Buttons, toggles, status and progress indicators.',
            items: [
                {
                    id: 'button',
                    name: 'Button',
                    summary: 'An interactive button with a range of presentation options.',
                    examples: ['button-types']
                },
                {
                    id: 'button-toggle',
                    name: 'Button toggle',
                    summary: 'A groupable on/off toggle for enabling and disabling options.',
                    examples: ['button-toggle-exclusive']
                },
                {
                    id: 'badge',
                    name: 'Badge',
                    summary: 'A small value indicator that can be overlaid on another object.',
                    examples: ['badge-overview']
                },
                {
                    id: 'chips',
                    name: 'Chips',
                    summary: 'Presents a list of items as a set of small, tactile entities.',
                    examples: [
                        'chips-overview',
                        'chips-autocomplete',
                        'chips-input',
                        'chips-stacked'
                    ]
                },
                {
                    id: 'icon',
                    name: 'Icon',
                    summary: 'Renders a specified icon.',
                    examples: ['icon-svg']
                },
                {
                    id: 'progress-spinner',
                    name: 'Progress spinner',
                    summary: 'A circular progress indicator.',
                    examples: ['progress-spinner-configurable']
                },
                {
                    id: 'progress-bar',
                    name: 'Progress bar',
                    summary: 'A linear progress indicator.',
                    examples: ['progress-bar-configurable']
                },
                {
                    id: 'ripple',
                    name: 'Ripples',
                    summary: 'Directive for adding Material Design ripple effects',
                    examples: ['ripple-overview']
                }
            ]
        },
        {
            id: 'modals',
            name: 'Popups & Modals',
            summary: 'Floating components that can be dynamically shown or hidden.',
            items: [
                {
                    id: 'bottom-sheet',
                    name: 'Bottom Sheet',
                    summary: 'A large interactive panel primarily for mobile devices.',
                    examples: ['bottom-sheet-overview']
                },
                {
                    id: 'dialog',
                    name: 'Dialog',
                    summary: 'A configurable modal that displays dynamic content.',
                    examples: ['dialog-overview']
                },
                {
                    id: 'snack-bar',
                    name: 'Snackbar',
                    summary: 'Displays short actionable messages as an uninvasive alert.',
                    examples: ['snack-bar-component']
                },
                {
                    id: 'tooltip',
                    name: 'Tooltip',
                    summary: 'Displays floating content when an object is hovered.',
                    examples: [
                        'tooltip-overview',
                        'tooltip-position',
                        'tooltip-custom-class',
                        'tooltip-delay',
                        'tooltip-disabled',
                        'tooltip-manual',
                        'tooltip-message',
                        'tooltip-modified-defaults',
                        'tooltip-auto-hide'
                    ]
                }
            ]
        },
        {
            id: 'tables',
            name: 'Data table',
            summary: 'Tools for displaying and interacting with tabular data.',
            items: [
                {
                    id: 'paginator',
                    name: 'Paginator',
                    summary: 'Controls for displaying paged data.',
                    examples: ['paginator-configurable']
                },
                {
                    id: 'sort',
                    name: 'Sort header',
                    summary: 'Allows the user to configure how tabular data is sorted.',
                    examples: ['sort-overview']
                },
                {
                    id: 'table',
                    name: 'Table',
                    summary: 'A configurable component for displaying tabular data.',
                    examples: [
                        'table-basic',
                        'table-basic-flex',
                        'table-dynamic-columns',
                        'table-expandable-rows',
                        'table-filtering',
                        'table-footer-row',
                        'table-http',
                        'table-multiple-header-footer',
                        'table-overview',
                        'table-pagination',
                        'table-row-context',
                        'table-selection',
                        'table-sorting',
                        'table-sticky-columns',
                        'table-sticky-footer',
                        'table-sticky-header'
                    ]
                }
            ]
        }
    ]
};

for (const category of DOCS[COMPONENTS]) {
    for (const doc of category.items) {
        doc.packageName = 'mosaic';
    }
}

const ALL_COMPONENTS = DOCS[COMPONENTS].reduce(
    (result, category) => result.concat(category.items), []);
const ALL_DOCS = ALL_COMPONENTS;
const ALL_CATEGORIES = DOCS[COMPONENTS];

@Injectable()
export class DocumentationItems {
    getCategories(section: string): DocCategory[] {
        return DOCS[section];
    }

    getItems(section: string): DocItem[] {
        if (section === COMPONENTS) {
            return ALL_COMPONENTS;
        }

        return [];
    }

    getItemById(id: string, section: string): DocItem {
        const sectionLookup = section === 'cdk' ? 'cdk' : 'mosaic';

        return ALL_DOCS.find((doc) => doc.id === id && doc.packageName === sectionLookup);
    }

    getCategoryById(id: string): DocCategory {
        return ALL_CATEGORIES.find((c) => c.id === id);
    }
}
