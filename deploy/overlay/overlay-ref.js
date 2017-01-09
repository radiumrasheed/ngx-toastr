/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
export var OverlayRef = (function () {
    function OverlayRef(_portalHost, _pane, _ngZone) {
        this._portalHost = _portalHost;
        this._pane = _pane;
        this._ngZone = _ngZone;
    }
    OverlayRef.prototype.attach = function (portal, newestOnTop) {
        var attachResult = this._portalHost.attach(portal, newestOnTop);
        return attachResult;
    };
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    OverlayRef.prototype.dispose = function () {
        this._portalHost.dispose();
    };
    OverlayRef.prototype.hasAttached = function () {
        return this._portalHost.hasAttached();
    };
    return OverlayRef;
}());
