/* global pdfjsViewer */
/* global pdfjsLib */

import Ember from 'ember'

const { getOwner, Service } = Ember

export default Service.extend({
  init () {
    this._super(...arguments)

    let appConfig = getOwner(this).resolveRegistration('config:environment')
    let addonConfig = appConfig.emberPdfJs

    this.pdfjsViewer = pdfjsViewer
    this.pdfjsViewer.workerSrc = addonConfig.workerSrc
    this.pdfjsLib = pdfjsLib
    this.pdfjsLib.GlobalWorkerOptions.workerSrc = addonConfig.workerSrc
  }
})
