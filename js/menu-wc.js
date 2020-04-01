'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">IgetEditor</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Wiki</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/prerequisites.html" data-type="entity-link" data-context-id="additional">Prerequisites</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/configuration.html" data-type="entity-link" data-context-id="additional">Configuration</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/toolbar.html" data-type="entity-link" data-context-id="additional">Toolbar</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/resizer.html" data-type="entity-link" data-context-id="additional">Resizer</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/errors.html" data-type="entity-link" data-context-id="additional">Errors</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f7457d064607fd66160cef89f18c8a21"' : 'data-target="#xs-components-links-module-AppModule-f7457d064607fd66160cef89f18c8a21"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f7457d064607fd66160cef89f18c8a21"' :
                                            'id="xs-components-links-module-AppModule-f7457d064607fd66160cef89f18c8a21"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IgetEditorModule.html" data-type="entity-link">IgetEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IgetEditorModule-b6cd2854d4e703efb8626a5f932f06ce"' : 'data-target="#xs-components-links-module-IgetEditorModule-b6cd2854d4e703efb8626a5f932f06ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IgetEditorModule-b6cd2854d4e703efb8626a5f932f06ce"' :
                                            'id="xs-components-links-module-IgetEditorModule-b6cd2854d4e703efb8626a5f932f06ce"' }>
                                            <li class="link">
                                                <a href="components/IgetEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IgetEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IgetEditorGrippieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IgetEditorGrippieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IgetEditorMessageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IgetEditorMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IgetEditorToolbarButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IgetEditorToolbarButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IgetEditorToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IgetEditorToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IgetEditorToolbarGroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IgetEditorToolbarGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinkDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IgetEditorModule-b6cd2854d4e703efb8626a5f932f06ce"' : 'data-target="#xs-injectables-links-module-IgetEditorModule-b6cd2854d4e703efb8626a5f932f06ce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IgetEditorModule-b6cd2854d4e703efb8626a5f932f06ce"' :
                                        'id="xs-injectables-links-module-IgetEditorModule-b6cd2854d4e703efb8626a5f932f06ce"' }>
                                        <li class="link">
                                            <a href="injectables/CommandExecutorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CommandExecutorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MessageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IMaxLengthValidatorOptions.html" data-type="entity-link">IMaxLengthValidatorOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LinkDialogData.html" data-type="entity-link">LinkDialogData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});