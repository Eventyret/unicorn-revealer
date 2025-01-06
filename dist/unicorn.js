// node_modules/posthog-js/dist/module.js
var e;
var t = "undefined" != typeof window ? window : void 0;
var i = "undefined" != typeof globalThis ? globalThis : t;
var n = Array.prototype;
var r = n.forEach;
var s = n.indexOf;
var o = null == i ? void 0 : i.navigator;
var a = null == i ? void 0 : i.document;
var l = null == i ? void 0 : i.location;
var u = null == i ? void 0 : i.fetch;
var c = null != i && i.XMLHttpRequest && "withCredentials" in new i.XMLHttpRequest() ? i.XMLHttpRequest : void 0;
var d = null == i ? void 0 : i.AbortController;
var h = null == o ? void 0 : o.userAgent;
var _ = null != t ? t : {};
var p = { DEBUG: false, LIB_VERSION: "1.204.0" };
var v = "$copy_autocapture";
var g = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"];
!function(e2) {
  e2.GZipJS = "gzip-js", e2.Base64 = "base64";
}(e || (e = {}));
function m(e2, t2) {
  return -1 !== e2.indexOf(t2);
}
var b = function(e2) {
  return e2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
var y = function(e2) {
  return e2.replace(/^\$/, "");
};
var w = Array.isArray;
var S = Object.prototype;
var E = S.hasOwnProperty;
var k = S.toString;
var x = w || function(e2) {
  return "[object Array]" === k.call(e2);
};
var I = (e2) => "function" == typeof e2;
var C = (e2) => e2 === Object(e2) && !x(e2);
var P = (e2) => {
  if (C(e2)) {
    for (var t2 in e2) if (E.call(e2, t2)) return false;
    return true;
  }
  return false;
};
var F = (e2) => void 0 === e2;
var R = (e2) => "[object String]" == k.call(e2);
var T = (e2) => R(e2) && 0 === e2.trim().length;
var $ = (e2) => null === e2;
var O = (e2) => F(e2) || $(e2);
var M = (e2) => "[object Number]" == k.call(e2);
var L = (e2) => "[object Boolean]" === k.call(e2);
var A = (e2) => e2 instanceof FormData;
var D = (e2) => m(g, e2);
var N = (e2) => {
  var i2 = { _log: function(i3) {
    if (t && (p.DEBUG || _.POSTHOG_DEBUG) && !F(t.console) && t.console) {
      for (var n2 = ("__rrweb_original__" in t.console[i3]) ? t.console[i3].__rrweb_original__ : t.console[i3], r2 = arguments.length, s2 = new Array(r2 > 1 ? r2 - 1 : 0), o2 = 1; o2 < r2; o2++) s2[o2 - 1] = arguments[o2];
      n2(e2, ...s2);
    }
  }, info: function() {
    for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
    i2._log("log", ...t2);
  }, warn: function() {
    for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
    i2._log("warn", ...t2);
  }, error: function() {
    for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
    i2._log("error", ...t2);
  }, critical: function() {
    for (var t2 = arguments.length, i3 = new Array(t2), n2 = 0; n2 < t2; n2++) i3[n2] = arguments[n2];
    console.error(e2, ...i3);
  }, uninitializedWarning: (e3) => {
    i2.error("You must initialize PostHog before calling ".concat(e3));
  }, createLogger: (t2) => N("".concat(e2, " ").concat(t2)) };
  return i2;
};
var q = N("[PostHog.js]");
var B = q.createLogger;
var H = B("[ExternalScriptsLoader]");
var U = (e2, t2, i2) => {
  if (e2.config.disable_external_dependency_loading) return H.warn("".concat(t2, " was requested but loading of external scripts is disabled.")), i2("Loading of external scripts is disabled");
  var n2 = () => {
    if (!a) return i2("document not found");
    var n3 = a.createElement("script");
    if (n3.type = "text/javascript", n3.crossOrigin = "anonymous", n3.src = t2, n3.onload = (e3) => i2(void 0, e3), n3.onerror = (e3) => i2(e3), e2.config.prepare_external_dependency_script && (n3 = e2.config.prepare_external_dependency_script(n3)), !n3) return i2("prepare_external_dependency_script returned null");
    var r2, s2 = a.querySelectorAll("body > script");
    s2.length > 0 ? null === (r2 = s2[0].parentNode) || void 0 === r2 || r2.insertBefore(n3, s2[0]) : a.body.appendChild(n3);
  };
  null != a && a.body ? n2() : null == a || a.addEventListener("DOMContentLoaded", n2);
};
function z(e2, t2) {
  var i2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(e2);
    t2 && (n2 = n2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), i2.push.apply(i2, n2);
  }
  return i2;
}
function j(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var i2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? z(Object(i2), true).forEach(function(t3) {
      W(e2, t3, i2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(i2)) : z(Object(i2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(i2, t3));
    });
  }
  return e2;
}
function W(e2, t2, i2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
}
function V(e2, t2) {
  if (null == e2) return {};
  var i2, n2, r2 = function(e3, t3) {
    if (null == e3) return {};
    var i3, n3, r3 = {}, s3 = Object.keys(e3);
    for (n3 = 0; n3 < s3.length; n3++) i3 = s3[n3], t3.indexOf(i3) >= 0 || (r3[i3] = e3[i3]);
    return r3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var s2 = Object.getOwnPropertySymbols(e2);
    for (n2 = 0; n2 < s2.length; n2++) i2 = s2[n2], t2.indexOf(i2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, i2) && (r2[i2] = e2[i2]);
  }
  return r2;
}
_.__PosthogExtensions__ = _.__PosthogExtensions__ || {}, _.__PosthogExtensions__.loadExternalDependency = (e2, t2, i2) => {
  var n2 = "/static/".concat(t2, ".js") + "?v=".concat(e2.version);
  if ("remote-config" === t2 && (n2 = "/array/".concat(e2.config.token, "/config.js")), "toolbar" === t2) {
    var r2 = 3e5, s2 = Math.floor(Date.now() / r2) * r2;
    n2 = "".concat(n2, "&t=").concat(s2);
  }
  var o2 = e2.requestRouter.endpointFor("assets", n2);
  U(e2, o2, i2);
}, _.__PosthogExtensions__.loadSiteApp = (e2, t2, i2) => {
  var n2 = e2.requestRouter.endpointFor("api", t2);
  U(e2, n2, i2);
};
var G = {};
function J(e2, t2, i2) {
  if (x(e2)) {
    if (r && e2.forEach === r) e2.forEach(t2, i2);
    else if ("length" in e2 && e2.length === +e2.length) {
      for (var n2 = 0, s2 = e2.length; n2 < s2; n2++) if (n2 in e2 && t2.call(i2, e2[n2], n2) === G) return;
    }
  }
}
function Y(e2, t2, i2) {
  if (!O(e2)) {
    if (x(e2)) return J(e2, t2, i2);
    if (A(e2)) {
      for (var n2 of e2.entries()) if (t2.call(i2, n2[1], n2[0]) === G) return;
    } else for (var r2 in e2) if (E.call(e2, r2) && t2.call(i2, e2[r2], r2) === G) return;
  }
}
var K = function(e2) {
  for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) i2[n2 - 1] = arguments[n2];
  return J(i2, function(t3) {
    for (var i3 in t3) void 0 !== t3[i3] && (e2[i3] = t3[i3]);
  }), e2;
};
function X(e2) {
  for (var t2 = Object.keys(e2), i2 = t2.length, n2 = new Array(i2); i2--; ) n2[i2] = [t2[i2], e2[t2[i2]]];
  return n2;
}
var Q = function(e2) {
  try {
    return e2();
  } catch (e3) {
    return;
  }
};
var Z = function(e2) {
  return function() {
    try {
      for (var t2 = arguments.length, i2 = new Array(t2), n2 = 0; n2 < t2; n2++) i2[n2] = arguments[n2];
      return e2.apply(this, i2);
    } catch (e3) {
      q.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), q.critical(e3);
    }
  };
};
var ee = function(e2) {
  var t2 = {};
  return Y(e2, function(e3, i2) {
    R(e3) && e3.length > 0 && (t2[i2] = e3);
  }), t2;
};
function te(e2, t2) {
  return i2 = e2, n2 = (e3) => R(e3) && !$(t2) ? e3.slice(0, t2) : e3, r2 = /* @__PURE__ */ new Set(), function e3(t3, i3) {
    return t3 !== Object(t3) ? n2 ? n2(t3, i3) : t3 : r2.has(t3) ? void 0 : (r2.add(t3), x(t3) ? (s2 = [], J(t3, (t4) => {
      s2.push(e3(t4));
    })) : (s2 = {}, Y(t3, (t4, i4) => {
      r2.has(t4) || (s2[i4] = e3(t4, i4));
    })), s2);
    var s2;
  }(i2);
  var i2, n2, r2;
}
var ie = function() {
  function e2(t2) {
    return t2 && (t2.preventDefault = e2.preventDefault, t2.stopPropagation = e2.stopPropagation), t2;
  }
  return e2.preventDefault = function() {
    this.returnValue = false;
  }, e2.stopPropagation = function() {
    this.cancelBubble = true;
  }, function(i2, n2, r2, s2, o2) {
    if (i2) if (i2.addEventListener && !s2) i2.addEventListener(n2, r2, !!o2);
    else {
      var a2 = "on" + n2, l2 = i2[a2];
      i2[a2] = /* @__PURE__ */ function(i3, n3, r3) {
        return function(s3) {
          if (s3 = s3 || e2(null == t ? void 0 : t.event)) {
            var o3, a3 = true;
            I(r3) && (o3 = r3(s3));
            var l3 = n3.call(i3, s3);
            return false !== o3 && false !== l3 || (a3 = false), a3;
          }
        };
      }(i2, r2, l2);
    }
    else q.error("No valid element provided to register_event");
  };
}();
function ne(e2, t2) {
  for (var i2 = 0; i2 < e2.length; i2++) if (t2(e2[i2])) return e2[i2];
}
var re = "$people_distinct_id";
var se = "__alias";
var oe = "__timers";
var ae = "$autocapture_disabled_server_side";
var le = "$heatmaps_enabled_server_side";
var ue = "$exception_capture_enabled_server_side";
var ce = "$web_vitals_enabled_server_side";
var de = "$dead_clicks_enabled_server_side";
var he = "$web_vitals_allowed_metrics";
var _e = "$session_recording_enabled_server_side";
var pe = "$console_log_recording_enabled_server_side";
var ve = "$session_recording_network_payload_capture";
var ge = "$session_recording_canvas_recording";
var fe = "$replay_sample_rate";
var me = "$replay_minimum_duration";
var be = "$replay_script_config";
var ye = "$sesid";
var we = "$session_is_sampled";
var Se = "$session_recording_url_trigger_activated_session";
var Ee = "$session_recording_event_trigger_activated_session";
var ke = "$enabled_feature_flags";
var xe = "$early_access_features";
var Ie = "$stored_person_properties";
var Ce = "$stored_group_properties";
var Pe = "$surveys";
var Fe = "$surveys_activated";
var Re = "$flag_call_reported";
var Te = "$user_state";
var $e = "$client_session_props";
var Oe = "$capture_rate_limit";
var Me = "$initial_campaign_params";
var Le = "$initial_referrer_info";
var Ae = "$initial_person_info";
var De = "$epp";
var Ne = "__POSTHOG_TOOLBAR__";
var qe = "$posthog_cklsh";
var Be = [re, se, "__cmpns", oe, _e, le, ye, ke, Te, xe, Ce, Ie, Pe, Re, $e, Oe, Me, Le, De];
var He = B("[FeatureFlags]");
var Ue = "$active_feature_flags";
var ze = "$override_feature_flags";
var je = "$feature_flag_payloads";
var We = (e2) => {
  var t2 = {};
  for (var [i2, n2] of X(e2 || {})) n2 && (t2[i2] = n2);
  return t2;
};
var Ve = class {
  constructor(e2) {
    W(this, "_override_warning", false), W(this, "_hasLoadedFlags", false), W(this, "_requestInFlight", false), W(this, "_reloadingDisabled", false), W(this, "_additionalReloadRequested", false), W(this, "_decideCalled", false), W(this, "_flagsLoadedFromRemote", false), this.instance = e2, this.featureFlagEventHandlers = [];
  }
  decide() {
    if (this.instance.config.__preview_remote_config) this._decideCalled = true;
    else {
      var e2 = !this._reloadDebouncer && (this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load);
      this._callDecideEndpoint({ disableFlags: e2 });
    }
  }
  get hasLoadedFlags() {
    return this._hasLoadedFlags;
  }
  getFlags() {
    return Object.keys(this.getFlagVariants());
  }
  getFlagVariants() {
    var e2 = this.instance.get_property(ke), t2 = this.instance.get_property(ze);
    if (!t2) return e2 || {};
    for (var i2 = K({}, e2), n2 = Object.keys(t2), r2 = 0; r2 < n2.length; r2++) i2[n2[r2]] = t2[n2[r2]];
    return this._override_warning || (He.warn(" Overriding feature flags!", { enabledFlags: e2, overriddenFlags: t2, finalFlags: i2 }), this._override_warning = true), i2;
  }
  getFlagPayloads() {
    return this.instance.get_property(je) || {};
  }
  reloadFeatureFlags() {
    this._reloadingDisabled || this.instance.config.advanced_disable_feature_flags || this._reloadDebouncer || (this._reloadDebouncer = setTimeout(() => {
      this._callDecideEndpoint();
    }, 5));
  }
  clearDebouncer() {
    clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0;
  }
  ensureFlagsLoaded() {
    this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags();
  }
  setAnonymousDistinctId(e2) {
    this.$anon_distinct_id = e2;
  }
  setReloadingPaused(e2) {
    this._reloadingDisabled = e2;
  }
  _callDecideEndpoint(t2) {
    if (this.clearDebouncer(), !this.instance.config.advanced_disable_decide) if (this._requestInFlight) this._additionalReloadRequested = true;
    else {
      var i2 = { token: this.instance.config.token, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id, person_properties: this.instance.get_property(Ie), group_properties: this.instance.get_property(Ce) };
      (null != t2 && t2.disableFlags || this.instance.config.advanced_disable_feature_flags) && (i2.disable_flags = true), this._requestInFlight = true, this.instance._send_request({ method: "POST", url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), data: i2, compression: this.instance.config.disable_compression ? void 0 : e.Base64, timeout: this.instance.config.feature_flag_request_timeout_ms, callback: (e2) => {
        var t3, n2, r2 = true;
        (200 === e2.statusCode && (this.$anon_distinct_id = void 0, r2 = false), this._requestInFlight = false, this._decideCalled) || (this._decideCalled = true, this.instance._onRemoteConfig(null !== (n2 = e2.json) && void 0 !== n2 ? n2 : {}));
        i2.disable_flags || (this._flagsLoadedFromRemote = !r2, this.receivedFeatureFlags(null !== (t3 = e2.json) && void 0 !== t3 ? t3 : {}, r2), this._additionalReloadRequested && (this._additionalReloadRequested = false, this._callDecideEndpoint()));
      } });
    }
  }
  getFeatureFlag(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
      var i2, n2, r2, s2, o2, a2 = this.getFlagVariants()[e2], l2 = "".concat(a2), u2 = this.instance.get_property(Re) || {};
      if (t2.send_event || !("send_event" in t2)) {
        if (!(e2 in u2) || !u2[e2].includes(l2)) x(u2[e2]) ? u2[e2].push(l2) : u2[e2] = [l2], null === (i2 = this.instance.persistence) || void 0 === i2 || i2.register({ [Re]: u2 }), this.instance.capture("$feature_flag_called", { $feature_flag: e2, $feature_flag_response: a2, $feature_flag_payload: this.getFeatureFlagPayload(e2) || null, $feature_flag_bootstrapped_response: (null === (n2 = this.instance.config.bootstrap) || void 0 === n2 || null === (r2 = n2.featureFlags) || void 0 === r2 ? void 0 : r2[e2]) || null, $feature_flag_bootstrapped_payload: (null === (s2 = this.instance.config.bootstrap) || void 0 === s2 || null === (o2 = s2.featureFlagPayloads) || void 0 === o2 ? void 0 : o2[e2]) || null, $used_bootstrap_value: !this._flagsLoadedFromRemote });
      }
      return a2;
    }
    He.warn('getFeatureFlag for key "' + e2 + `" failed. Feature flags didn't load in time.`);
  }
  getFeatureFlagPayload(e2) {
    return this.getFlagPayloads()[e2];
  }
  isFeatureEnabled(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e2, t2);
    He.warn('isFeatureEnabled for key "' + e2 + `" failed. Feature flags didn't load in time.`);
  }
  addFeatureFlagsHandler(e2) {
    this.featureFlagEventHandlers.push(e2);
  }
  removeFeatureFlagsHandler(e2) {
    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((t2) => t2 !== e2);
  }
  receivedFeatureFlags(e2, t2) {
    if (this.instance.persistence) {
      this._hasLoadedFlags = true;
      var i2 = this.getFlagVariants(), n2 = this.getFlagPayloads();
      !function(e3, t3) {
        var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, r2 = e3.featureFlags, s2 = e3.featureFlagPayloads;
        if (r2) if (x(r2)) {
          var o2 = {};
          if (r2) for (var a2 = 0; a2 < r2.length; a2++) o2[r2[a2]] = true;
          t3 && t3.register({ [Ue]: r2, [ke]: o2 });
        } else {
          var l2 = r2, u2 = s2;
          e3.errorsWhileComputingFlags && (l2 = j(j({}, i3), l2), u2 = j(j({}, n3), u2)), t3 && t3.register({ [Ue]: Object.keys(We(l2)), [ke]: l2 || {}, [je]: u2 || {} });
        }
      }(e2, this.instance.persistence, i2, n2), this._fireFeatureFlagsCallbacks(t2);
    }
  }
  override(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!this.instance.__loaded || !this.instance.persistence) return He.uninitializedWarning("posthog.feature_flags.override");
    if (this._override_warning = t2, false === e2) this.instance.persistence.unregister(ze);
    else if (x(e2)) {
      for (var i2 = {}, n2 = 0; n2 < e2.length; n2++) i2[e2[n2]] = true;
      this.instance.persistence.register({ [ze]: i2 });
    } else this.instance.persistence.register({ [ze]: e2 });
  }
  onFeatureFlags(e2) {
    if (this.addFeatureFlagsHandler(e2), this._hasLoadedFlags) {
      var { flags: t2, flagVariants: i2 } = this._prepareFeatureFlagsForCallbacks();
      e2(t2, i2);
    }
    return () => this.removeFeatureFlagsHandler(e2);
  }
  updateEarlyAccessFeatureEnrollment(e2, t2) {
    var i2, n2 = (this.instance.get_property(xe) || []).find((t3) => t3.flagKey === e2), r2 = { ["$feature_enrollment/".concat(e2)]: t2 }, s2 = { $feature_flag: e2, $feature_enrollment: t2, $set: r2 };
    n2 && (s2.$early_access_feature_name = n2.name), this.instance.capture("$feature_enrollment_update", s2), this.setPersonPropertiesForFlags(r2, false);
    var o2 = j(j({}, this.getFlagVariants()), {}, { [e2]: t2 });
    null === (i2 = this.instance.persistence) || void 0 === i2 || i2.register({ [Ue]: Object.keys(We(o2)), [ke]: o2 }), this._fireFeatureFlagsCallbacks();
  }
  getEarlyAccessFeatures(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i2 = this.instance.get_property(xe);
    if (i2 && !t2) return e2(i2);
    this.instance._send_request({ url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)), method: "GET", callback: (t3) => {
      var i3;
      if (t3.json) {
        var n2 = t3.json.earlyAccessFeatures;
        return null === (i3 = this.instance.persistence) || void 0 === i3 || i3.register({ [xe]: n2 }), e2(n2);
      }
    } });
  }
  _prepareFeatureFlagsForCallbacks() {
    var e2 = this.getFlags(), t2 = this.getFlagVariants();
    return { flags: e2.filter((e3) => t2[e3]), flagVariants: Object.keys(t2).filter((e3) => t2[e3]).reduce((e3, i2) => (e3[i2] = t2[i2], e3), {}) };
  }
  _fireFeatureFlagsCallbacks(e2) {
    var { flags: t2, flagVariants: i2 } = this._prepareFeatureFlagsForCallbacks();
    this.featureFlagEventHandlers.forEach((n2) => n2(t2, i2, { errorsLoading: e2 }));
  }
  setPersonPropertiesForFlags(e2) {
    var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = this.instance.get_property(Ie) || {};
    this.instance.register({ [Ie]: j(j({}, i2), e2) }), t2 && this.instance.reloadFeatureFlags();
  }
  resetPersonPropertiesForFlags() {
    this.instance.unregister(Ie);
  }
  setGroupPropertiesForFlags(e2) {
    var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = this.instance.get_property(Ce) || {};
    0 !== Object.keys(i2).length && Object.keys(i2).forEach((t3) => {
      i2[t3] = j(j({}, i2[t3]), e2[t3]), delete e2[t3];
    }), this.instance.register({ [Ce]: j(j({}, i2), e2) }), t2 && this.instance.reloadFeatureFlags();
  }
  resetGroupPropertiesForFlags(e2) {
    if (e2) {
      var t2 = this.instance.get_property(Ce) || {};
      this.instance.register({ [Ce]: j(j({}, t2), {}, { [e2]: {} }) });
    } else this.instance.unregister(Ce);
  }
};
Math.trunc || (Math.trunc = function(e2) {
  return e2 < 0 ? Math.ceil(e2) : Math.floor(e2);
}), Number.isInteger || (Number.isInteger = function(e2) {
  return M(e2) && isFinite(e2) && Math.floor(e2) === e2;
});
var Ge = "0123456789abcdef";
var Je = class _Je {
  constructor(e2) {
    if (this.bytes = e2, 16 !== e2.length) throw new TypeError("not 128-bit length");
  }
  static fromFieldsV7(e2, t2, i2, n2) {
    if (!Number.isInteger(e2) || !Number.isInteger(t2) || !Number.isInteger(i2) || !Number.isInteger(n2) || e2 < 0 || t2 < 0 || i2 < 0 || n2 < 0 || e2 > 281474976710655 || t2 > 4095 || i2 > 1073741823 || n2 > 4294967295) throw new RangeError("invalid field value");
    var r2 = new Uint8Array(16);
    return r2[0] = e2 / Math.pow(2, 40), r2[1] = e2 / Math.pow(2, 32), r2[2] = e2 / Math.pow(2, 24), r2[3] = e2 / Math.pow(2, 16), r2[4] = e2 / Math.pow(2, 8), r2[5] = e2, r2[6] = 112 | t2 >>> 8, r2[7] = t2, r2[8] = 128 | i2 >>> 24, r2[9] = i2 >>> 16, r2[10] = i2 >>> 8, r2[11] = i2, r2[12] = n2 >>> 24, r2[13] = n2 >>> 16, r2[14] = n2 >>> 8, r2[15] = n2, new _Je(r2);
  }
  toString() {
    for (var e2 = "", t2 = 0; t2 < this.bytes.length; t2++) e2 = e2 + Ge.charAt(this.bytes[t2] >>> 4) + Ge.charAt(15 & this.bytes[t2]), 3 !== t2 && 5 !== t2 && 7 !== t2 && 9 !== t2 || (e2 += "-");
    if (36 !== e2.length) throw new Error("Invalid UUIDv7 was generated");
    return e2;
  }
  clone() {
    return new _Je(this.bytes.slice(0));
  }
  equals(e2) {
    return 0 === this.compareTo(e2);
  }
  compareTo(e2) {
    for (var t2 = 0; t2 < 16; t2++) {
      var i2 = this.bytes[t2] - e2.bytes[t2];
      if (0 !== i2) return Math.sign(i2);
    }
    return 0;
  }
};
var Ye = class {
  constructor() {
    W(this, "timestamp", 0), W(this, "counter", 0), W(this, "random", new Qe());
  }
  generate() {
    var e2 = this.generateOrAbort();
    if (F(e2)) {
      this.timestamp = 0;
      var t2 = this.generateOrAbort();
      if (F(t2)) throw new Error("Could not generate UUID after timestamp reset");
      return t2;
    }
    return e2;
  }
  generateOrAbort() {
    var e2 = Date.now();
    if (e2 > this.timestamp) this.timestamp = e2, this.resetCounter();
    else {
      if (!(e2 + 1e4 > this.timestamp)) return;
      this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
    }
    return Je.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32());
  }
  resetCounter() {
    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
  }
};
var Ke;
var Xe = (e2) => {
  if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
  for (var t2 = 0; t2 < e2.length; t2++) e2[t2] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return e2;
};
t && !F(t.crypto) && crypto.getRandomValues && (Xe = (e2) => crypto.getRandomValues(e2));
var Qe = class {
  constructor() {
    W(this, "buffer", new Uint32Array(8)), W(this, "cursor", 1 / 0);
  }
  nextUint32() {
    return this.cursor >= this.buffer.length && (Xe(this.buffer), this.cursor = 0), this.buffer[this.cursor++];
  }
};
var Ze = () => et().toString();
var et = () => (Ke || (Ke = new Ye())).generate();
var tt = "Thu, 01 Jan 1970 00:00:00 GMT";
var it = "";
var nt = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
function rt(e2, t2) {
  if (t2) {
    var i2 = function(e3) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
      if (it) return it;
      if (!t3) return "";
      if (["localhost", "127.0.0.1"].includes(e3)) return "";
      for (var i3 = e3.split("."), n3 = Math.min(i3.length, 8), r2 = "dmn_chk_" + Ze(), s2 = new RegExp("(^|;)\\s*" + r2 + "=1"); !it && n3--; ) {
        var o2 = i3.slice(n3).join("."), l2 = r2 + "=1;domain=." + o2;
        t3.cookie = l2, s2.test(t3.cookie) && (t3.cookie = l2 + ";expires=" + tt, it = o2);
      }
      return it;
    }(e2);
    if (!i2) {
      var n2 = ((e3) => {
        var t3 = e3.match(nt);
        return t3 ? t3[0] : "";
      })(e2);
      n2 !== i2 && q.info("Warning: cookie subdomain discovery mismatch", n2, i2), i2 = n2;
    }
    return i2 ? "; domain=." + i2 : "";
  }
  return "";
}
var st = { is_supported: () => !!a, error: function(e2) {
  q.error("cookieStore error: " + e2);
}, get: function(e2) {
  if (a) {
    try {
      for (var t2 = e2 + "=", i2 = a.cookie.split(";").filter((e3) => e3.length), n2 = 0; n2 < i2.length; n2++) {
        for (var r2 = i2[n2]; " " == r2.charAt(0); ) r2 = r2.substring(1, r2.length);
        if (0 === r2.indexOf(t2)) return decodeURIComponent(r2.substring(t2.length, r2.length));
      }
    } catch (e3) {
    }
    return null;
  }
}, parse: function(e2) {
  var t2;
  try {
    t2 = JSON.parse(st.get(e2)) || {};
  } catch (e3) {
  }
  return t2;
}, set: function(e2, t2, i2, n2, r2) {
  if (a) try {
    var s2 = "", o2 = "", l2 = rt(a.location.hostname, n2);
    if (i2) {
      var u2 = /* @__PURE__ */ new Date();
      u2.setTime(u2.getTime() + 24 * i2 * 60 * 60 * 1e3), s2 = "; expires=" + u2.toUTCString();
    }
    r2 && (o2 = "; secure");
    var c2 = e2 + "=" + encodeURIComponent(JSON.stringify(t2)) + s2 + "; SameSite=Lax; path=/" + l2 + o2;
    return c2.length > 3686.4 && q.warn("cookieStore warning: large cookie, len=" + c2.length), a.cookie = c2, c2;
  } catch (e3) {
    return;
  }
}, remove: function(e2, t2) {
  try {
    st.set(e2, "", -1, t2);
  } catch (e3) {
    return;
  }
} };
var ot = null;
var at = { is_supported: function() {
  if (!$(ot)) return ot;
  var e2 = true;
  if (F(t)) e2 = false;
  else try {
    var i2 = "__mplssupport__";
    at.set(i2, "xyz"), '"xyz"' !== at.get(i2) && (e2 = false), at.remove(i2);
  } catch (t2) {
    e2 = false;
  }
  return e2 || q.error("localStorage unsupported; falling back to cookie store"), ot = e2, e2;
}, error: function(e2) {
  q.error("localStorage error: " + e2);
}, get: function(e2) {
  try {
    return null == t ? void 0 : t.localStorage.getItem(e2);
  } catch (e3) {
    at.error(e3);
  }
  return null;
}, parse: function(e2) {
  try {
    return JSON.parse(at.get(e2)) || {};
  } catch (e3) {
  }
  return null;
}, set: function(e2, i2) {
  try {
    null == t || t.localStorage.setItem(e2, JSON.stringify(i2));
  } catch (e3) {
    at.error(e3);
  }
}, remove: function(e2) {
  try {
    null == t || t.localStorage.removeItem(e2);
  } catch (e3) {
    at.error(e3);
  }
} };
var lt = ["distinct_id", ye, we, De, Ae];
var ut = j(j({}, at), {}, { parse: function(e2) {
  try {
    var t2 = {};
    try {
      t2 = st.parse(e2) || {};
    } catch (e3) {
    }
    var i2 = K(t2, JSON.parse(at.get(e2) || "{}"));
    return at.set(e2, i2), i2;
  } catch (e3) {
  }
  return null;
}, set: function(e2, t2, i2, n2, r2, s2) {
  try {
    at.set(e2, t2, void 0, void 0, s2);
    var o2 = {};
    lt.forEach((e3) => {
      t2[e3] && (o2[e3] = t2[e3]);
    }), Object.keys(o2).length && st.set(e2, o2, i2, n2, r2, s2);
  } catch (e3) {
    at.error(e3);
  }
}, remove: function(e2, i2) {
  try {
    null == t || t.localStorage.removeItem(e2), st.remove(e2, i2);
  } catch (e3) {
    at.error(e3);
  }
} });
var ct = {};
var dt = { is_supported: function() {
  return true;
}, error: function(e2) {
  q.error("memoryStorage error: " + e2);
}, get: function(e2) {
  return ct[e2] || null;
}, parse: function(e2) {
  return ct[e2] || null;
}, set: function(e2, t2) {
  ct[e2] = t2;
}, remove: function(e2) {
  delete ct[e2];
} };
var ht = null;
var _t = { is_supported: function() {
  if (!$(ht)) return ht;
  if (ht = true, F(t)) ht = false;
  else try {
    var e2 = "__support__";
    _t.set(e2, "xyz"), '"xyz"' !== _t.get(e2) && (ht = false), _t.remove(e2);
  } catch (e3) {
    ht = false;
  }
  return ht;
}, error: function(e2) {
  q.error("sessionStorage error: ", e2);
}, get: function(e2) {
  try {
    return null == t ? void 0 : t.sessionStorage.getItem(e2);
  } catch (e3) {
    _t.error(e3);
  }
  return null;
}, parse: function(e2) {
  try {
    return JSON.parse(_t.get(e2)) || null;
  } catch (e3) {
  }
  return null;
}, set: function(e2, i2) {
  try {
    null == t || t.sessionStorage.setItem(e2, JSON.stringify(i2));
  } catch (e3) {
    _t.error(e3);
  }
}, remove: function(e2) {
  try {
    null == t || t.sessionStorage.removeItem(e2);
  } catch (e3) {
    _t.error(e3);
  }
} };
var pt = ["localhost", "127.0.0.1"];
var vt = (e2) => {
  var t2 = null == a ? void 0 : a.createElement("a");
  return F(t2) ? null : (t2.href = e2, t2);
};
var gt = function(e2, t2) {
  return !!function(e3) {
    try {
      new RegExp(e3);
    } catch (e4) {
      return false;
    }
    return true;
  }(t2) && new RegExp(t2).test(e2);
};
var ft = function(e2) {
  var t2, i2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", r2 = [];
  return Y(e2, function(e3, n3) {
    F(e3) || F(n3) || "undefined" === n3 || (t2 = encodeURIComponent(((e4) => e4 instanceof File)(e3) ? e3.name : e3.toString()), i2 = encodeURIComponent(n3), r2[r2.length] = i2 + "=" + t2);
  }), r2.join(n2);
};
var mt = function(e2, t2) {
  for (var i2, n2 = ((e2.split("#")[0] || "").split("?")[1] || "").split("&"), r2 = 0; r2 < n2.length; r2++) {
    var s2 = n2[r2].split("=");
    if (s2[0] === t2) {
      i2 = s2;
      break;
    }
  }
  if (!x(i2) || i2.length < 2) return "";
  var o2 = i2[1];
  try {
    o2 = decodeURIComponent(o2);
  } catch (e3) {
    q.error("Skipping decoding for malformed query param: " + o2);
  }
  return o2.replace(/\+/g, " ");
};
var bt = function(e2, t2) {
  var i2 = e2.match(new RegExp(t2 + "=([^&]*)"));
  return i2 ? i2[1] : null;
};
var yt = "Mobile";
var wt = "iOS";
var St = "Android";
var Et = "Tablet";
var kt = St + " " + Et;
var xt = "iPad";
var It = "Apple";
var Ct = It + " Watch";
var Pt = "Safari";
var Ft = "BlackBerry";
var Rt = "Samsung";
var Tt = Rt + "Browser";
var $t = Rt + " Internet";
var Ot = "Chrome";
var Mt = Ot + " OS";
var Lt = Ot + " " + wt;
var At = "Internet Explorer";
var Dt = At + " " + yt;
var Nt = "Opera";
var qt = Nt + " Mini";
var Bt = "Edge";
var Ht = "Microsoft " + Bt;
var Ut = "Firefox";
var zt = Ut + " " + wt;
var jt = "Nintendo";
var Wt = "PlayStation";
var Vt = "Xbox";
var Gt = St + " " + yt;
var Jt = yt + " " + Pt;
var Yt = "Windows";
var Kt = Yt + " Phone";
var Xt = "Nokia";
var Qt = "Ouya";
var Zt = "Generic";
var ei = Zt + " " + yt.toLowerCase();
var ti = Zt + " " + Et.toLowerCase();
var ii = "Konqueror";
var ni = "(\\d+(\\.\\d+)?)";
var ri = new RegExp("Version/" + ni);
var si = new RegExp(Vt, "i");
var oi = new RegExp(Wt + " \\w+", "i");
var ai = new RegExp(jt + " \\w+", "i");
var li = new RegExp(Ft + "|PlayBook|BB10", "i");
var ui = { "NT3.51": "NT 3.11", "NT4.0": "NT 4.0", "5.0": "2000", 5.1: "XP", 5.2: "XP", "6.0": "Vista", 6.1: "7", 6.2: "8", 6.3: "8.1", 6.4: "10", "10.0": "10" };
var ci = (e2, t2) => t2 && m(t2, It) || function(e3) {
  return m(e3, Pt) && !m(e3, Ot) && !m(e3, St);
}(e2);
var di = function(e2, t2) {
  return t2 = t2 || "", m(e2, " OPR/") && m(e2, "Mini") ? qt : m(e2, " OPR/") ? Nt : li.test(e2) ? Ft : m(e2, "IE" + yt) || m(e2, "WPDesktop") ? Dt : m(e2, Tt) ? $t : m(e2, Bt) || m(e2, "Edg/") ? Ht : m(e2, "FBIOS") ? "Facebook " + yt : m(e2, "UCWEB") || m(e2, "UCBrowser") ? "UC Browser" : m(e2, "CriOS") ? Lt : m(e2, "CrMo") || m(e2, Ot) ? Ot : m(e2, St) && m(e2, Pt) ? Gt : m(e2, "FxiOS") ? zt : m(e2.toLowerCase(), ii.toLowerCase()) ? ii : ci(e2, t2) ? m(e2, yt) ? Jt : Pt : m(e2, Ut) ? Ut : m(e2, "MSIE") || m(e2, "Trident/") ? At : m(e2, "Gecko") ? Ut : "";
};
var hi = { [Dt]: [new RegExp("rv:" + ni)], [Ht]: [new RegExp(Bt + "?\\/" + ni)], [Ot]: [new RegExp("(" + Ot + "|CrMo)\\/" + ni)], [Lt]: [new RegExp("CriOS\\/" + ni)], "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + ni)], [Pt]: [ri], [Jt]: [ri], [Nt]: [new RegExp("(Opera|OPR)\\/" + ni)], [Ut]: [new RegExp(Ut + "\\/" + ni)], [zt]: [new RegExp("FxiOS\\/" + ni)], [ii]: [new RegExp("Konqueror[:/]?" + ni, "i")], [Ft]: [new RegExp(Ft + " " + ni), ri], [Gt]: [new RegExp("android\\s" + ni, "i")], [$t]: [new RegExp(Tt + "\\/" + ni)], [At]: [new RegExp("(rv:|MSIE )" + ni)], Mozilla: [new RegExp("rv:" + ni)] };
var _i = [[new RegExp(Vt + "; " + Vt + " (.*?)[);]", "i"), (e2) => [Vt, e2 && e2[1] || ""]], [new RegExp(jt, "i"), [jt, ""]], [new RegExp(Wt, "i"), [Wt, ""]], [li, [Ft, ""]], [new RegExp(Yt, "i"), (e2, t2) => {
  if (/Phone/.test(t2) || /WPDesktop/.test(t2)) return [Kt, ""];
  if (new RegExp(yt).test(t2) && !/IEMobile\b/.test(t2)) return [Yt + " " + yt, ""];
  var i2 = /Windows NT ([0-9.]+)/i.exec(t2);
  if (i2 && i2[1]) {
    var n2 = i2[1], r2 = ui[n2] || "";
    return /arm/i.test(t2) && (r2 = "RT"), [Yt, r2];
  }
  return [Yt, ""];
}], [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (e2) => {
  if (e2 && e2[3]) {
    var t2 = [e2[3], e2[4], e2[5] || "0"];
    return [wt, t2.join(".")];
  }
  return [wt, ""];
}], [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (e2) => {
  var t2 = "";
  return e2 && e2.length >= 3 && (t2 = F(e2[2]) ? e2[3] : e2[2]), ["watchOS", t2];
}], [new RegExp("(" + St + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + St + ")", "i"), (e2) => {
  if (e2 && e2[2]) {
    var t2 = [e2[2], e2[3], e2[4] || "0"];
    return [St, t2.join(".")];
  }
  return [St, ""];
}], [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (e2) => {
  var t2 = ["Mac OS X", ""];
  if (e2 && e2[1]) {
    var i2 = [e2[1], e2[2], e2[3] || "0"];
    t2[1] = i2.join(".");
  }
  return t2;
}], [/Mac/i, ["Mac OS X", ""]], [/CrOS/, [Mt, ""]], [/Linux|debian/i, ["Linux", ""]]];
var pi = function(e2) {
  return ai.test(e2) ? jt : oi.test(e2) ? Wt : si.test(e2) ? Vt : new RegExp(Qt, "i").test(e2) ? Qt : new RegExp("(" + Kt + "|WPDesktop)", "i").test(e2) ? Kt : /iPad/.test(e2) ? xt : /iPod/.test(e2) ? "iPod Touch" : /iPhone/.test(e2) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e2) ? Ct : li.test(e2) ? Ft : /(kobo)\s(ereader|touch)/i.test(e2) ? "Kobo" : new RegExp(Xt, "i").test(e2) ? Xt : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e2) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e2) ? "Kindle Fire" : /(Android|ZTE)/i.test(e2) ? !new RegExp(yt).test(e2) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e2) ? /pixel[\daxl ]{1,6}/i.test(e2) && !/pixel c/i.test(e2) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e2) || /lmy47v/i.test(e2) && !/QTAQZ3/i.test(e2) ? St : kt : St : new RegExp("(pda|" + yt + ")", "i").test(e2) ? ei : new RegExp(Et, "i").test(e2) && !new RegExp(Et + " pc", "i").test(e2) ? ti : "";
};
var vi = "https?://(.*)";
var gi = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid", "rdt_cid"];
var fi = { campaignParams: function(e2) {
  return a ? this._campaignParamsFromUrl(a.URL, e2) : {};
}, _campaignParamsFromUrl: function(e2, t2) {
  var i2 = gi.concat(t2 || []), n2 = {};
  return Y(i2, function(t3) {
    var i3 = mt(e2, t3);
    n2[t3] = i3 || null;
  }), n2;
}, _searchEngine: function(e2) {
  return e2 ? 0 === e2.search(vi + "google.([^/?]*)") ? "google" : 0 === e2.search(vi + "bing.com") ? "bing" : 0 === e2.search(vi + "yahoo.com") ? "yahoo" : 0 === e2.search(vi + "duckduckgo.com") ? "duckduckgo" : null : null;
}, _searchInfoFromReferrer: function(e2) {
  var t2 = fi._searchEngine(e2), i2 = "yahoo" != t2 ? "q" : "p", n2 = {};
  if (!$(t2)) {
    n2.$search_engine = t2;
    var r2 = a ? mt(a.referrer, i2) : "";
    r2.length && (n2.ph_keyword = r2);
  }
  return n2;
}, searchInfo: function() {
  var e2 = null == a ? void 0 : a.referrer;
  return e2 ? this._searchInfoFromReferrer(e2) : {};
}, browser: di, browserVersion: function(e2, t2) {
  var i2 = di(e2, t2), n2 = hi[i2];
  if (F(n2)) return null;
  for (var r2 = 0; r2 < n2.length; r2++) {
    var s2 = n2[r2], o2 = e2.match(s2);
    if (o2) return parseFloat(o2[o2.length - 2]);
  }
  return null;
}, browserLanguage: function() {
  return navigator.language || navigator.userLanguage;
}, browserLanguagePrefix: function() {
  var e2 = this.browserLanguage();
  return "string" == typeof e2 ? e2.split("-")[0] : void 0;
}, os: function(e2) {
  for (var t2 = 0; t2 < _i.length; t2++) {
    var [i2, n2] = _i[t2], r2 = i2.exec(e2), s2 = r2 && (I(n2) ? n2(r2, e2) : n2);
    if (s2) return s2;
  }
  return ["", ""];
}, device: pi, deviceType: function(e2) {
  var t2 = pi(e2);
  return t2 === xt || t2 === kt || "Kobo" === t2 || "Kindle Fire" === t2 || t2 === ti ? Et : t2 === jt || t2 === Vt || t2 === Wt || t2 === Qt ? "Console" : t2 === Ct ? "Wearable" : t2 ? yt : "Desktop";
}, referrer: function() {
  return (null == a ? void 0 : a.referrer) || "$direct";
}, referringDomain: function() {
  var e2;
  return null != a && a.referrer && (null === (e2 = vt(a.referrer)) || void 0 === e2 ? void 0 : e2.host) || "$direct";
}, referrerInfo: function() {
  return { $referrer: this.referrer(), $referring_domain: this.referringDomain() };
}, initialPersonInfo: function() {
  return { r: this.referrer().substring(0, 1e3), u: null == l ? void 0 : l.href.substring(0, 1e3) };
}, initialPersonPropsFromInfo: function(e2) {
  var t2, { r: i2, u: n2 } = e2, r2 = { $initial_referrer: i2, $initial_referring_domain: null == i2 ? void 0 : "$direct" == i2 ? "$direct" : null === (t2 = vt(i2)) || void 0 === t2 ? void 0 : t2.host };
  if (n2) {
    r2.$initial_current_url = n2;
    var s2 = vt(n2);
    r2.$initial_host = null == s2 ? void 0 : s2.host, r2.$initial_pathname = null == s2 ? void 0 : s2.pathname, Y(this._campaignParamsFromUrl(n2), function(e3, t3) {
      r2["$initial_" + y(t3)] = e3;
    });
  }
  i2 && Y(this._searchInfoFromReferrer(i2), function(e3, t3) {
    r2["$initial_" + y(t3)] = e3;
  });
  return r2;
}, timezone: function() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (e2) {
    return;
  }
}, timezoneOffset: function() {
  try {
    return (/* @__PURE__ */ new Date()).getTimezoneOffset();
  } catch (e2) {
    return;
  }
}, properties: function() {
  if (!h) return {};
  var [e2, i2] = fi.os(h);
  return K(ee({ $os: e2, $os_version: i2, $browser: fi.browser(h, navigator.vendor), $device: fi.device(h), $device_type: fi.deviceType(h), $timezone: fi.timezone(), $timezone_offset: fi.timezoneOffset() }), { $current_url: null == l ? void 0 : l.href, $host: null == l ? void 0 : l.host, $pathname: null == l ? void 0 : l.pathname, $raw_user_agent: h.length > 1e3 ? h.substring(0, 997) + "..." : h, $browser_version: fi.browserVersion(h, navigator.vendor), $browser_language: fi.browserLanguage(), $browser_language_prefix: fi.browserLanguagePrefix(), $screen_height: null == t ? void 0 : t.screen.height, $screen_width: null == t ? void 0 : t.screen.width, $viewport_height: null == t ? void 0 : t.innerHeight, $viewport_width: null == t ? void 0 : t.innerWidth, $lib: "web", $lib_version: p.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: Date.now() / 1e3 });
}, people_properties: function() {
  if (!h) return {};
  var [e2, t2] = fi.os(h);
  return K(ee({ $os: e2, $os_version: t2, $browser: fi.browser(h, navigator.vendor) }), { $browser_version: fi.browserVersion(h, navigator.vendor) });
} };
var mi = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
var bi = class {
  constructor(e2) {
    this.config = e2, this.props = {}, this.campaign_params_saved = false, this.name = ((e3) => {
      var t2 = "";
      return e3.token && (t2 = e3.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e3.persistence_name ? "ph_" + e3.persistence_name : "ph_" + t2 + "_posthog";
    })(e2), this.storage = this.buildStorage(e2), this.load(), e2.debug && q.info("Persistence loaded", e2.persistence, j({}, this.props)), this.update_config(e2, e2), this.save();
  }
  buildStorage(e2) {
    -1 === mi.indexOf(e2.persistence.toLowerCase()) && (q.critical("Unknown persistence type " + e2.persistence + "; falling back to localStorage+cookie"), e2.persistence = "localStorage+cookie");
    var t2 = e2.persistence.toLowerCase();
    return "localstorage" === t2 && at.is_supported() ? at : "localstorage+cookie" === t2 && ut.is_supported() ? ut : "sessionstorage" === t2 && _t.is_supported() ? _t : "memory" === t2 ? dt : "cookie" === t2 ? st : ut.is_supported() ? ut : st;
  }
  properties() {
    var e2 = {};
    return Y(this.props, function(t2, i2) {
      if (i2 === ke && C(t2)) for (var n2 = Object.keys(t2), r2 = 0; r2 < n2.length; r2++) e2["$feature/".concat(n2[r2])] = t2[n2[r2]];
      else a2 = i2, l2 = false, ($(o2 = Be) ? l2 : s && o2.indexOf === s ? -1 != o2.indexOf(a2) : (Y(o2, function(e3) {
        if (l2 || (l2 = e3 === a2)) return G;
      }), l2)) || (e2[i2] = t2);
      var o2, a2, l2;
    }), e2;
  }
  load() {
    if (!this.disabled) {
      var e2 = this.storage.parse(this.name);
      e2 && (this.props = K({}, e2));
    }
  }
  save() {
    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure, this.config.debug);
  }
  remove() {
    this.storage.remove(this.name, false), this.storage.remove(this.name, true);
  }
  clear() {
    this.remove(), this.props = {};
  }
  register_once(e2, t2, i2) {
    if (C(e2)) {
      F(t2) && (t2 = "None"), this.expire_days = F(i2) ? this.default_expiry : i2;
      var n2 = false;
      if (Y(e2, (e3, i3) => {
        this.props.hasOwnProperty(i3) && this.props[i3] !== t2 || (this.props[i3] = e3, n2 = true);
      }), n2) return this.save(), true;
    }
    return false;
  }
  register(e2, t2) {
    if (C(e2)) {
      this.expire_days = F(t2) ? this.default_expiry : t2;
      var i2 = false;
      if (Y(e2, (t3, n2) => {
        e2.hasOwnProperty(n2) && this.props[n2] !== t3 && (this.props[n2] = t3, i2 = true);
      }), i2) return this.save(), true;
    }
    return false;
  }
  unregister(e2) {
    e2 in this.props && (delete this.props[e2], this.save());
  }
  update_campaign_params() {
    if (!this.campaign_params_saved) {
      var e2 = fi.campaignParams(this.config.custom_campaign_params);
      P(ee(e2)) || this.register(e2), this.campaign_params_saved = true;
    }
  }
  update_search_keyword() {
    this.register(fi.searchInfo());
  }
  update_referrer_info() {
    this.register_once(fi.referrerInfo(), void 0);
  }
  set_initial_person_info() {
    this.props[Me] || this.props[Le] || this.register_once({ [Ae]: fi.initialPersonInfo() }, void 0);
  }
  get_referrer_info() {
    return ee({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
  }
  get_initial_props() {
    var e2 = {};
    Y([Le, Me], (t3) => {
      var i3 = this.props[t3];
      i3 && Y(i3, function(t4, i4) {
        e2["$initial_" + y(i4)] = t4;
      });
    });
    var t2 = this.props[Ae];
    if (t2) {
      var i2 = fi.initialPersonPropsFromInfo(t2);
      K(e2, i2);
    }
    return e2;
  }
  safe_merge(e2) {
    return Y(this.props, function(t2, i2) {
      i2 in e2 || (e2[i2] = t2);
    }), e2;
  }
  update_config(e2, t2) {
    if (this.default_expiry = this.expire_days = e2.cookie_expiration, this.set_disabled(e2.disable_persistence), this.set_cross_subdomain(e2.cross_subdomain_cookie), this.set_secure(e2.secure_cookie), e2.persistence !== t2.persistence) {
      var i2 = this.buildStorage(e2), n2 = this.props;
      this.clear(), this.storage = i2, this.props = n2, this.save();
    }
  }
  set_disabled(e2) {
    this.disabled = e2, this.disabled ? this.remove() : this.save();
  }
  set_cross_subdomain(e2) {
    e2 !== this.cross_subdomain && (this.cross_subdomain = e2, this.remove(), this.save());
  }
  get_cross_subdomain() {
    return !!this.cross_subdomain;
  }
  set_secure(e2) {
    e2 !== this.secure && (this.secure = e2, this.remove(), this.save());
  }
  set_event_timer(e2, t2) {
    var i2 = this.props[oe] || {};
    i2[e2] = t2, this.props[oe] = i2, this.save();
  }
  remove_event_timer(e2) {
    var t2 = (this.props[oe] || {})[e2];
    return F(t2) || (delete this.props[oe][e2], this.save()), t2;
  }
  get_property(e2) {
    return this.props[e2];
  }
  set_property(e2, t2) {
    this.props[e2] = t2, this.save();
  }
};
function yi(e2) {
  var t2, i2;
  return (null === (t2 = JSON.stringify(e2, (i2 = [], function(e3, t3) {
    if (C(t3)) {
      for (; i2.length > 0 && i2[i2.length - 1] !== this; ) i2.pop();
      return i2.includes(t3) ? "[Circular]" : (i2.push(t3), t3);
    }
    return t3;
  }))) || void 0 === t2 ? void 0 : t2.length) || 0;
}
function wi(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66060288e-1;
  if (e2.size >= t2 && e2.data.length > 1) {
    var i2 = Math.floor(e2.data.length / 2), n2 = e2.data.slice(0, i2), r2 = e2.data.slice(i2);
    return [wi({ size: yi(n2), data: n2, sessionId: e2.sessionId, windowId: e2.windowId }), wi({ size: yi(r2), data: r2, sessionId: e2.sessionId, windowId: e2.windowId })].flatMap((e3) => e3);
  }
  return [e2];
}
var Si = ((e2) => (e2[e2.DomContentLoaded = 0] = "DomContentLoaded", e2[e2.Load = 1] = "Load", e2[e2.FullSnapshot = 2] = "FullSnapshot", e2[e2.IncrementalSnapshot = 3] = "IncrementalSnapshot", e2[e2.Meta = 4] = "Meta", e2[e2.Custom = 5] = "Custom", e2[e2.Plugin = 6] = "Plugin", e2))(Si || {});
var Ei = ((e2) => (e2[e2.Mutation = 0] = "Mutation", e2[e2.MouseMove = 1] = "MouseMove", e2[e2.MouseInteraction = 2] = "MouseInteraction", e2[e2.Scroll = 3] = "Scroll", e2[e2.ViewportResize = 4] = "ViewportResize", e2[e2.Input = 5] = "Input", e2[e2.TouchMove = 6] = "TouchMove", e2[e2.MediaInteraction = 7] = "MediaInteraction", e2[e2.StyleSheetRule = 8] = "StyleSheetRule", e2[e2.CanvasMutation = 9] = "CanvasMutation", e2[e2.Font = 10] = "Font", e2[e2.Log = 11] = "Log", e2[e2.Drag = 12] = "Drag", e2[e2.StyleDeclaration = 13] = "StyleDeclaration", e2[e2.Selection = 14] = "Selection", e2[e2.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e2[e2.CustomElement = 16] = "CustomElement", e2))(Ei || {});
function ki(e2) {
  var t2;
  return e2 instanceof Element && (e2.id === Ne || !(null === (t2 = e2.closest) || void 0 === t2 || !t2.call(e2, ".toolbar-global-fade-container")));
}
function xi(e2) {
  return !!e2 && 1 === e2.nodeType;
}
function Ii(e2, t2) {
  return !!e2 && !!e2.tagName && e2.tagName.toLowerCase() === t2.toLowerCase();
}
function Ci(e2) {
  return !!e2 && 3 === e2.nodeType;
}
function Pi(e2) {
  return !!e2 && 11 === e2.nodeType;
}
function Fi(e2) {
  return e2 ? b(e2).split(/\s+/) : [];
}
function Ri(e2) {
  var i2 = null == t ? void 0 : t.location.href;
  return !!(i2 && e2 && e2.some((e3) => i2.match(e3)));
}
function Ti(e2) {
  var t2 = "";
  switch (typeof e2.className) {
    case "string":
      t2 = e2.className;
      break;
    case "object":
      t2 = (e2.className && "baseVal" in e2.className ? e2.className.baseVal : null) || e2.getAttribute("class") || "";
      break;
    default:
      t2 = "";
  }
  return Fi(t2);
}
function $i(e2) {
  return O(e2) ? null : b(e2).split(/(\s+)/).filter((e3) => Vi(e3)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function Oi(e2) {
  var t2 = "";
  return Ni(e2) && !qi(e2) && e2.childNodes && e2.childNodes.length && Y(e2.childNodes, function(e3) {
    var i2;
    Ci(e3) && e3.textContent && (t2 += null !== (i2 = $i(e3.textContent)) && void 0 !== i2 ? i2 : "");
  }), b(t2);
}
function Mi(e2) {
  return F(e2.target) ? e2.srcElement || null : null !== (t2 = e2.target) && void 0 !== t2 && t2.shadowRoot ? e2.composedPath()[0] || null : e2.target || null;
  var t2;
}
var Li = ["a", "button", "form", "input", "select", "textarea", "label"];
function Ai(e2) {
  var t2 = e2.parentNode;
  return !(!t2 || !xi(t2)) && t2;
}
function Di(e2, i2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, r2 = arguments.length > 3 ? arguments[3] : void 0, s2 = arguments.length > 4 ? arguments[4] : void 0;
  if (!t || !e2 || Ii(e2, "html") || !xi(e2)) return false;
  if (null != n2 && n2.url_allowlist && !Ri(n2.url_allowlist)) return false;
  if (null != n2 && n2.url_ignorelist && Ri(n2.url_ignorelist)) return false;
  if (null != n2 && n2.dom_event_allowlist) {
    var o2 = n2.dom_event_allowlist;
    if (o2 && !o2.some((e3) => i2.type === e3)) return false;
  }
  for (var a2 = false, l2 = [e2], u2 = true, c2 = e2; c2.parentNode && !Ii(c2, "body"); ) if (Pi(c2.parentNode)) l2.push(c2.parentNode.host), c2 = c2.parentNode.host;
  else {
    if (!(u2 = Ai(c2))) break;
    if (r2 || Li.indexOf(u2.tagName.toLowerCase()) > -1) a2 = true;
    else {
      var d2 = t.getComputedStyle(u2);
      d2 && "pointer" === d2.getPropertyValue("cursor") && (a2 = true);
    }
    l2.push(u2), c2 = u2;
  }
  if (!function(e3, t2) {
    var i3 = null == t2 ? void 0 : t2.element_allowlist;
    if (F(i3)) return true;
    var n3 = function(e4) {
      if (i3.some((t3) => e4.tagName.toLowerCase() === t3)) return { v: true };
    };
    for (var r3 of e3) {
      var s3 = n3(r3);
      if ("object" == typeof s3) return s3.v;
    }
    return false;
  }(l2, n2)) return false;
  if (!function(e3, t2) {
    var i3 = null == t2 ? void 0 : t2.css_selector_allowlist;
    if (F(i3)) return true;
    var n3 = function(e4) {
      if (i3.some((t3) => e4.matches(t3))) return { v: true };
    };
    for (var r3 of e3) {
      var s3 = n3(r3);
      if ("object" == typeof s3) return s3.v;
    }
    return false;
  }(l2, n2)) return false;
  var h2 = t.getComputedStyle(e2);
  if (h2 && "pointer" === h2.getPropertyValue("cursor") && "click" === i2.type) return true;
  var _2 = e2.tagName.toLowerCase();
  switch (_2) {
    case "html":
      return false;
    case "form":
      return (s2 || ["submit"]).indexOf(i2.type) >= 0;
    case "input":
    case "select":
    case "textarea":
      return (s2 || ["change", "click"]).indexOf(i2.type) >= 0;
    default:
      return a2 ? (s2 || ["click"]).indexOf(i2.type) >= 0 : (s2 || ["click"]).indexOf(i2.type) >= 0 && (Li.indexOf(_2) > -1 || "true" === e2.getAttribute("contenteditable"));
  }
}
function Ni(e2) {
  for (var t2 = e2; t2.parentNode && !Ii(t2, "body"); t2 = t2.parentNode) {
    var i2 = Ti(t2);
    if (m(i2, "ph-sensitive") || m(i2, "ph-no-capture")) return false;
  }
  if (m(Ti(e2), "ph-include")) return true;
  var n2 = e2.type || "";
  if (R(n2)) switch (n2.toLowerCase()) {
    case "hidden":
    case "password":
      return false;
  }
  var r2 = e2.name || e2.id || "";
  if (R(r2)) {
    if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r2.replace(/[^a-zA-Z0-9]/g, ""))) return false;
  }
  return true;
}
function qi(e2) {
  return !!(Ii(e2, "input") && !["button", "checkbox", "submit", "reset"].includes(e2.type) || Ii(e2, "select") || Ii(e2, "textarea") || "true" === e2.getAttribute("contenteditable"));
}
var Bi = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})";
var Hi = new RegExp("^(?:".concat(Bi, ")$"));
var Ui = new RegExp(Bi);
var zi = "\\d{3}-?\\d{2}-?\\d{4}";
var ji = new RegExp("^(".concat(zi, ")$"));
var Wi = new RegExp("(".concat(zi, ")"));
function Vi(e2) {
  var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (O(e2)) return false;
  if (R(e2)) {
    if (e2 = b(e2), (t2 ? Hi : Ui).test((e2 || "").replace(/[- ]/g, ""))) return false;
    if ((t2 ? ji : Wi).test(e2)) return false;
  }
  return true;
}
function Gi(e2) {
  var t2 = Oi(e2);
  return Vi(t2 = "".concat(t2, " ").concat(Ji(e2)).trim()) ? t2 : "";
}
function Ji(e2) {
  var t2 = "";
  return e2 && e2.childNodes && e2.childNodes.length && Y(e2.childNodes, function(e3) {
    var i2;
    if (e3 && "span" === (null === (i2 = e3.tagName) || void 0 === i2 ? void 0 : i2.toLowerCase())) try {
      var n2 = Oi(e3);
      t2 = "".concat(t2, " ").concat(n2).trim(), e3.childNodes && e3.childNodes.length && (t2 = "".concat(t2, " ").concat(Ji(e3)).trim());
    } catch (e4) {
      q.error("[AutoCapture]", e4);
    }
  }), t2;
}
function Yi(e2) {
  return function(e3) {
    var t2 = e3.map((e4) => {
      var t3, i2, n2 = "";
      if (e4.tag_name && (n2 += e4.tag_name), e4.attr_class) for (var r2 of (e4.attr_class.sort(), e4.attr_class)) n2 += ".".concat(r2.replace(/"/g, ""));
      var s2 = j(j(j(j({}, e4.text ? { text: e4.text } : {}), {}, { "nth-child": null !== (t3 = e4.nth_child) && void 0 !== t3 ? t3 : 0, "nth-of-type": null !== (i2 = e4.nth_of_type) && void 0 !== i2 ? i2 : 0 }, e4.href ? { href: e4.href } : {}), e4.attr_id ? { attr_id: e4.attr_id } : {}), e4.attributes), o2 = {};
      return X(s2).sort((e5, t4) => {
        var [i3] = e5, [n3] = t4;
        return i3.localeCompare(n3);
      }).forEach((e5) => {
        var [t4, i3] = e5;
        return o2[Ki(t4.toString())] = Ki(i3.toString());
      }), n2 += ":", n2 += X(s2).map((e5) => {
        var [t4, i3] = e5;
        return "".concat(t4, '="').concat(i3, '"');
      }).join("");
    });
    return t2.join(";");
  }(function(e3) {
    return e3.map((e4) => {
      var t2, i2, n2 = { text: null === (t2 = e4.$el_text) || void 0 === t2 ? void 0 : t2.slice(0, 400), tag_name: e4.tag_name, href: null === (i2 = e4.attr__href) || void 0 === i2 ? void 0 : i2.slice(0, 2048), attr_class: Xi(e4), attr_id: e4.attr__id, nth_child: e4.nth_child, nth_of_type: e4.nth_of_type, attributes: {} };
      return X(e4).filter((e5) => {
        var [t3] = e5;
        return 0 === t3.indexOf("attr__");
      }).forEach((e5) => {
        var [t3, i3] = e5;
        return n2.attributes[t3] = i3;
      }), n2;
    });
  }(e2));
}
function Ki(e2) {
  return e2.replace(/"|\\"/g, '\\"');
}
function Xi(e2) {
  var t2 = e2.attr__class;
  return t2 ? x(t2) ? t2 : Fi(t2) : void 0;
}
var Qi = "[SessionRecording]";
var Zi = "redacted";
var en = { initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"], maskRequestFn: (e2) => e2, recordHeaders: false, recordBody: false, recordInitialRequests: false, recordPerformance: false, performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"], payloadSizeLimitBytes: 1e6, payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "analytics.google.com"] };
var tn = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"];
var nn = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"];
var rn = ["/s/", "/e/", "/i/"];
function sn(e2, t2, i2, n2) {
  if (O(e2)) return e2;
  var r2 = (null == t2 ? void 0 : t2["content-length"]) || function(e3) {
    return new Blob([e3]).size;
  }(e2);
  return R(r2) && (r2 = parseInt(r2)), r2 > i2 ? Qi + " ".concat(n2, " body too large to record (").concat(r2, " bytes)") : e2;
}
function on(e2, t2) {
  if (O(e2)) return e2;
  var i2 = e2;
  return Vi(i2, false) || (i2 = Qi + " " + t2 + " body " + Zi), Y(nn, (e3) => {
    var n2, r2;
    null !== (n2 = i2) && void 0 !== n2 && n2.length && -1 !== (null === (r2 = i2) || void 0 === r2 ? void 0 : r2.indexOf(e3)) && (i2 = Qi + " " + t2 + " body " + Zi + " as might contain: " + e3);
  }), i2;
}
var an = (e2, t2) => {
  var i2, n2, r2, s2 = { payloadSizeLimitBytes: en.payloadSizeLimitBytes, performanceEntryTypeToObserve: [...en.performanceEntryTypeToObserve], payloadHostDenyList: [...t2.payloadHostDenyList || [], ...en.payloadHostDenyList] }, o2 = false !== e2.session_recording.recordHeaders && t2.recordHeaders, a2 = false !== e2.session_recording.recordBody && t2.recordBody, l2 = false !== e2.capture_performance && t2.recordPerformance, u2 = (i2 = s2, r2 = Math.min(1e6, null !== (n2 = i2.payloadSizeLimitBytes) && void 0 !== n2 ? n2 : 1e6), (e3) => (null != e3 && e3.requestBody && (e3.requestBody = sn(e3.requestBody, e3.requestHeaders, r2, "Request")), null != e3 && e3.responseBody && (e3.responseBody = sn(e3.responseBody, e3.responseHeaders, r2, "Response")), e3)), c2 = (t3) => {
    return u2(((e3, t4) => {
      var i4, n4 = vt(e3.name), r3 = 0 === t4.indexOf("http") ? null === (i4 = vt(t4)) || void 0 === i4 ? void 0 : i4.pathname : t4;
      "/" === r3 && (r3 = "");
      var s3 = null == n4 ? void 0 : n4.pathname.replace(r3 || "", "");
      if (!(n4 && s3 && rn.some((e4) => 0 === s3.indexOf(e4)))) return e3;
    })((n3 = (i3 = t3).requestHeaders, O(n3) || Y(Object.keys(null != n3 ? n3 : {}), (e3) => {
      tn.includes(e3.toLowerCase()) && (n3[e3] = Zi);
    }), i3), e2.api_host));
    var i3, n3;
  }, d2 = I(e2.session_recording.maskNetworkRequestFn);
  return d2 && I(e2.session_recording.maskCapturedNetworkRequestFn) && q.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), d2 && (e2.session_recording.maskCapturedNetworkRequestFn = (t3) => {
    var i3 = e2.session_recording.maskNetworkRequestFn({ url: t3.name });
    return j(j({}, t3), {}, { name: null == i3 ? void 0 : i3.url });
  }), s2.maskRequestFn = I(e2.session_recording.maskCapturedNetworkRequestFn) ? (t3) => {
    var i3, n3, r3, s3 = c2(t3);
    return s3 && null !== (i3 = null === (n3 = (r3 = e2.session_recording).maskCapturedNetworkRequestFn) || void 0 === n3 ? void 0 : n3.call(r3, s3)) && void 0 !== i3 ? i3 : void 0;
  } : (e3) => function(e4) {
    if (!F(e4)) return e4.requestBody = on(e4.requestBody, "Request"), e4.responseBody = on(e4.responseBody, "Response"), e4;
  }(c2(e3)), j(j(j({}, en), s2), {}, { recordHeaders: o2, recordBody: a2, recordPerformance: l2, recordInitialRequests: l2 });
};
function ln(e2, t2, i2, n2, r2) {
  return t2 > i2 && (q.warn("min cannot be greater than max."), t2 = i2), M(e2) ? e2 > i2 ? (n2 && q.warn(n2 + " cannot be  greater than max: " + i2 + ". Using max value instead."), i2) : e2 < t2 ? (n2 && q.warn(n2 + " cannot be less than min: " + t2 + ". Using min value instead."), t2) : e2 : (n2 && q.warn(n2 + " must be a number. using max or fallback. max: " + i2 + ", fallback: " + r2), ln(r2 || i2, t2, i2, n2));
}
var un = class {
  constructor(e2) {
    var t2, i2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    W(this, "bucketSize", 100), W(this, "refillRate", 10), W(this, "mutationBuckets", {}), W(this, "loggedTracker", {}), W(this, "refillBuckets", () => {
      Object.keys(this.mutationBuckets).forEach((e3) => {
        this.mutationBuckets[e3] = this.mutationBuckets[e3] + this.refillRate, this.mutationBuckets[e3] >= this.bucketSize && delete this.mutationBuckets[e3];
      });
    }), W(this, "getNodeOrRelevantParent", (e3) => {
      var t3 = this.rrweb.mirror.getNode(e3);
      if ("svg" !== (null == t3 ? void 0 : t3.nodeName) && t3 instanceof Element) {
        var i3 = t3.closest("svg");
        if (i3) return [this.rrweb.mirror.getId(i3), i3];
      }
      return [e3, t3];
    }), W(this, "numberOfChanges", (e3) => {
      var t3, i3, n3, r2, s2, o2, a2, l2;
      return (null !== (t3 = null === (i3 = e3.removes) || void 0 === i3 ? void 0 : i3.length) && void 0 !== t3 ? t3 : 0) + (null !== (n3 = null === (r2 = e3.attributes) || void 0 === r2 ? void 0 : r2.length) && void 0 !== n3 ? n3 : 0) + (null !== (s2 = null === (o2 = e3.texts) || void 0 === o2 ? void 0 : o2.length) && void 0 !== s2 ? s2 : 0) + (null !== (a2 = null === (l2 = e3.adds) || void 0 === l2 ? void 0 : l2.length) && void 0 !== a2 ? a2 : 0);
    }), W(this, "throttleMutations", (e3) => {
      if (3 !== e3.type || 0 !== e3.data.source) return e3;
      var t3 = e3.data, i3 = this.numberOfChanges(t3);
      t3.attributes && (t3.attributes = t3.attributes.filter((e4) => {
        var t4, i4, n4, [r2, s2] = this.getNodeOrRelevantParent(e4.id);
        if (0 === this.mutationBuckets[r2]) return false;
        (this.mutationBuckets[r2] = null !== (t4 = this.mutationBuckets[r2]) && void 0 !== t4 ? t4 : this.bucketSize, this.mutationBuckets[r2] = Math.max(this.mutationBuckets[r2] - 1, 0), 0 === this.mutationBuckets[r2]) && (this.loggedTracker[r2] || (this.loggedTracker[r2] = true, null === (i4 = (n4 = this.options).onBlockedNode) || void 0 === i4 || i4.call(n4, r2, s2)));
        return e4;
      }));
      var n3 = this.numberOfChanges(t3);
      return 0 !== n3 || i3 === n3 ? e3 : void 0;
    }), this.rrweb = e2, this.options = n2, this.refillRate = ln(null !== (t2 = this.options.refillRate) && void 0 !== t2 ? t2 : this.refillRate, 0, 100, "mutation throttling refill rate"), this.bucketSize = ln(null !== (i2 = this.options.bucketSize) && void 0 !== i2 ? i2 : this.bucketSize, 0, 100, "mutation throttling bucket size"), setInterval(() => {
      this.refillBuckets();
    }, 1e3);
  }
};
var cn = Uint8Array;
var dn = Uint16Array;
var hn = Uint32Array;
var _n = new cn([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
var pn = new cn([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
var vn = new cn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var gn = function(e2, t2) {
  for (var i2 = new dn(31), n2 = 0; n2 < 31; ++n2) i2[n2] = t2 += 1 << e2[n2 - 1];
  var r2 = new hn(i2[30]);
  for (n2 = 1; n2 < 30; ++n2) for (var s2 = i2[n2]; s2 < i2[n2 + 1]; ++s2) r2[s2] = s2 - i2[n2] << 5 | n2;
  return [i2, r2];
};
var fn = gn(_n, 2);
var mn = fn[0];
var bn = fn[1];
mn[28] = 258, bn[258] = 28;
for (yn = gn(pn, 0)[1], wn = new dn(32768), Sn = 0; Sn < 32768; ++Sn) {
  En = (43690 & Sn) >>> 1 | (21845 & Sn) << 1;
  En = (61680 & (En = (52428 & En) >>> 2 | (13107 & En) << 2)) >>> 4 | (3855 & En) << 4, wn[Sn] = ((65280 & En) >>> 8 | (255 & En) << 8) >>> 1;
}
var En;
var yn;
var wn;
var Sn;
var kn = function(e2, t2, i2) {
  for (var n2 = e2.length, r2 = 0, s2 = new dn(t2); r2 < n2; ++r2) ++s2[e2[r2] - 1];
  var o2, a2 = new dn(t2);
  for (r2 = 0; r2 < t2; ++r2) a2[r2] = a2[r2 - 1] + s2[r2 - 1] << 1;
  if (i2) {
    o2 = new dn(1 << t2);
    var l2 = 15 - t2;
    for (r2 = 0; r2 < n2; ++r2) if (e2[r2]) for (var u2 = r2 << 4 | e2[r2], c2 = t2 - e2[r2], d2 = a2[e2[r2] - 1]++ << c2, h2 = d2 | (1 << c2) - 1; d2 <= h2; ++d2) o2[wn[d2] >>> l2] = u2;
  } else for (o2 = new dn(n2), r2 = 0; r2 < n2; ++r2) o2[r2] = wn[a2[e2[r2] - 1]++] >>> 15 - e2[r2];
  return o2;
};
var xn = new cn(288);
for (Sn = 0; Sn < 144; ++Sn) xn[Sn] = 8;
for (Sn = 144; Sn < 256; ++Sn) xn[Sn] = 9;
for (Sn = 256; Sn < 280; ++Sn) xn[Sn] = 7;
for (Sn = 280; Sn < 288; ++Sn) xn[Sn] = 8;
var In = new cn(32);
for (Sn = 0; Sn < 32; ++Sn) In[Sn] = 5;
var Cn = kn(xn, 9, 0);
var Pn = kn(In, 5, 0);
var Fn = function(e2) {
  return (e2 / 8 >> 0) + (7 & e2 && 1);
};
var Rn = function(e2, t2, i2) {
  (null == i2 || i2 > e2.length) && (i2 = e2.length);
  var n2 = new (e2 instanceof dn ? dn : e2 instanceof hn ? hn : cn)(i2 - t2);
  return n2.set(e2.subarray(t2, i2)), n2;
};
var Tn = function(e2, t2, i2) {
  i2 <<= 7 & t2;
  var n2 = t2 / 8 >> 0;
  e2[n2] |= i2, e2[n2 + 1] |= i2 >>> 8;
};
var $n = function(e2, t2, i2) {
  i2 <<= 7 & t2;
  var n2 = t2 / 8 >> 0;
  e2[n2] |= i2, e2[n2 + 1] |= i2 >>> 8, e2[n2 + 2] |= i2 >>> 16;
};
var On = function(e2, t2) {
  for (var i2 = [], n2 = 0; n2 < e2.length; ++n2) e2[n2] && i2.push({ s: n2, f: e2[n2] });
  var r2 = i2.length, s2 = i2.slice();
  if (!r2) return [new cn(0), 0];
  if (1 == r2) {
    var o2 = new cn(i2[0].s + 1);
    return o2[i2[0].s] = 1, [o2, 1];
  }
  i2.sort(function(e3, t3) {
    return e3.f - t3.f;
  }), i2.push({ s: -1, f: 25001 });
  var a2 = i2[0], l2 = i2[1], u2 = 0, c2 = 1, d2 = 2;
  for (i2[0] = { s: -1, f: a2.f + l2.f, l: a2, r: l2 }; c2 != r2 - 1; ) a2 = i2[i2[u2].f < i2[d2].f ? u2++ : d2++], l2 = i2[u2 != c2 && i2[u2].f < i2[d2].f ? u2++ : d2++], i2[c2++] = { s: -1, f: a2.f + l2.f, l: a2, r: l2 };
  var h2 = s2[0].s;
  for (n2 = 1; n2 < r2; ++n2) s2[n2].s > h2 && (h2 = s2[n2].s);
  var _2 = new dn(h2 + 1), p2 = Mn(i2[c2 - 1], _2, 0);
  if (p2 > t2) {
    n2 = 0;
    var v2 = 0, g2 = p2 - t2, f = 1 << g2;
    for (s2.sort(function(e3, t3) {
      return _2[t3.s] - _2[e3.s] || e3.f - t3.f;
    }); n2 < r2; ++n2) {
      var m2 = s2[n2].s;
      if (!(_2[m2] > t2)) break;
      v2 += f - (1 << p2 - _2[m2]), _2[m2] = t2;
    }
    for (v2 >>>= g2; v2 > 0; ) {
      var b2 = s2[n2].s;
      _2[b2] < t2 ? v2 -= 1 << t2 - _2[b2]++ - 1 : ++n2;
    }
    for (; n2 >= 0 && v2; --n2) {
      var y2 = s2[n2].s;
      _2[y2] == t2 && (--_2[y2], ++v2);
    }
    p2 = t2;
  }
  return [new cn(_2), p2];
};
var Mn = function(e2, t2, i2) {
  return -1 == e2.s ? Math.max(Mn(e2.l, t2, i2 + 1), Mn(e2.r, t2, i2 + 1)) : t2[e2.s] = i2;
};
var Ln = function(e2) {
  for (var t2 = e2.length; t2 && !e2[--t2]; ) ;
  for (var i2 = new dn(++t2), n2 = 0, r2 = e2[0], s2 = 1, o2 = function(e3) {
    i2[n2++] = e3;
  }, a2 = 1; a2 <= t2; ++a2) if (e2[a2] == r2 && a2 != t2) ++s2;
  else {
    if (!r2 && s2 > 2) {
      for (; s2 > 138; s2 -= 138) o2(32754);
      s2 > 2 && (o2(s2 > 10 ? s2 - 11 << 5 | 28690 : s2 - 3 << 5 | 12305), s2 = 0);
    } else if (s2 > 3) {
      for (o2(r2), --s2; s2 > 6; s2 -= 6) o2(8304);
      s2 > 2 && (o2(s2 - 3 << 5 | 8208), s2 = 0);
    }
    for (; s2--; ) o2(r2);
    s2 = 1, r2 = e2[a2];
  }
  return [i2.subarray(0, n2), t2];
};
var An = function(e2, t2) {
  for (var i2 = 0, n2 = 0; n2 < t2.length; ++n2) i2 += e2[n2] * t2[n2];
  return i2;
};
var Dn = function(e2, t2, i2) {
  var n2 = i2.length, r2 = Fn(t2 + 2);
  e2[r2] = 255 & n2, e2[r2 + 1] = n2 >>> 8, e2[r2 + 2] = 255 ^ e2[r2], e2[r2 + 3] = 255 ^ e2[r2 + 1];
  for (var s2 = 0; s2 < n2; ++s2) e2[r2 + s2 + 4] = i2[s2];
  return 8 * (r2 + 4 + n2);
};
var Nn = function(e2, t2, i2, n2, r2, s2, o2, a2, l2, u2, c2) {
  Tn(t2, c2++, i2), ++r2[256];
  for (var d2 = On(r2, 15), h2 = d2[0], _2 = d2[1], p2 = On(s2, 15), v2 = p2[0], g2 = p2[1], f = Ln(h2), m2 = f[0], b2 = f[1], y2 = Ln(v2), w2 = y2[0], S2 = y2[1], E2 = new dn(19), k2 = 0; k2 < m2.length; ++k2) E2[31 & m2[k2]]++;
  for (k2 = 0; k2 < w2.length; ++k2) E2[31 & w2[k2]]++;
  for (var x2 = On(E2, 7), I2 = x2[0], C2 = x2[1], P2 = 19; P2 > 4 && !I2[vn[P2 - 1]]; --P2) ;
  var F2, R2, T2, $2, O2 = u2 + 5 << 3, M2 = An(r2, xn) + An(s2, In) + o2, L2 = An(r2, h2) + An(s2, v2) + o2 + 14 + 3 * P2 + An(E2, I2) + (2 * E2[16] + 3 * E2[17] + 7 * E2[18]);
  if (O2 <= M2 && O2 <= L2) return Dn(t2, c2, e2.subarray(l2, l2 + u2));
  if (Tn(t2, c2, 1 + (L2 < M2)), c2 += 2, L2 < M2) {
    F2 = kn(h2, _2, 0), R2 = h2, T2 = kn(v2, g2, 0), $2 = v2;
    var A2 = kn(I2, C2, 0);
    Tn(t2, c2, b2 - 257), Tn(t2, c2 + 5, S2 - 1), Tn(t2, c2 + 10, P2 - 4), c2 += 14;
    for (k2 = 0; k2 < P2; ++k2) Tn(t2, c2 + 3 * k2, I2[vn[k2]]);
    c2 += 3 * P2;
    for (var D2 = [m2, w2], N2 = 0; N2 < 2; ++N2) {
      var q2 = D2[N2];
      for (k2 = 0; k2 < q2.length; ++k2) {
        var B2 = 31 & q2[k2];
        Tn(t2, c2, A2[B2]), c2 += I2[B2], B2 > 15 && (Tn(t2, c2, q2[k2] >>> 5 & 127), c2 += q2[k2] >>> 12);
      }
    }
  } else F2 = Cn, R2 = xn, T2 = Pn, $2 = In;
  for (k2 = 0; k2 < a2; ++k2) if (n2[k2] > 255) {
    B2 = n2[k2] >>> 18 & 31;
    $n(t2, c2, F2[B2 + 257]), c2 += R2[B2 + 257], B2 > 7 && (Tn(t2, c2, n2[k2] >>> 23 & 31), c2 += _n[B2]);
    var H2 = 31 & n2[k2];
    $n(t2, c2, T2[H2]), c2 += $2[H2], H2 > 3 && ($n(t2, c2, n2[k2] >>> 5 & 8191), c2 += pn[H2]);
  } else $n(t2, c2, F2[n2[k2]]), c2 += R2[n2[k2]];
  return $n(t2, c2, F2[256]), c2 + R2[256];
};
var qn = new hn([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var Bn = function() {
  for (var e2 = new hn(256), t2 = 0; t2 < 256; ++t2) {
    for (var i2 = t2, n2 = 9; --n2; ) i2 = (1 & i2 && 3988292384) ^ i2 >>> 1;
    e2[t2] = i2;
  }
  return e2;
}();
var Hn = function() {
  var e2 = 4294967295;
  return { p: function(t2) {
    for (var i2 = e2, n2 = 0; n2 < t2.length; ++n2) i2 = Bn[255 & i2 ^ t2[n2]] ^ i2 >>> 8;
    e2 = i2;
  }, d: function() {
    return 4294967295 ^ e2;
  } };
};
var Un = function(e2, t2, i2, n2, r2) {
  return function(e3, t3, i3, n3, r3, s2) {
    var o2 = e3.length, a2 = new cn(n3 + o2 + 5 * (1 + Math.floor(o2 / 7e3)) + r3), l2 = a2.subarray(n3, a2.length - r3), u2 = 0;
    if (!t3 || o2 < 8) for (var c2 = 0; c2 <= o2; c2 += 65535) {
      var d2 = c2 + 65535;
      d2 < o2 ? u2 = Dn(l2, u2, e3.subarray(c2, d2)) : (l2[c2] = s2, u2 = Dn(l2, u2, e3.subarray(c2, o2)));
    }
    else {
      for (var h2 = qn[t3 - 1], _2 = h2 >>> 13, p2 = 8191 & h2, v2 = (1 << i3) - 1, g2 = new dn(32768), f = new dn(v2 + 1), m2 = Math.ceil(i3 / 3), b2 = 2 * m2, y2 = function(t4) {
        return (e3[t4] ^ e3[t4 + 1] << m2 ^ e3[t4 + 2] << b2) & v2;
      }, w2 = new hn(25e3), S2 = new dn(288), E2 = new dn(32), k2 = 0, x2 = 0, I2 = (c2 = 0, 0), C2 = 0, P2 = 0; c2 < o2; ++c2) {
        var F2 = y2(c2), R2 = 32767 & c2, T2 = f[F2];
        if (g2[R2] = T2, f[F2] = R2, C2 <= c2) {
          var $2 = o2 - c2;
          if ((k2 > 7e3 || I2 > 24576) && $2 > 423) {
            u2 = Nn(e3, l2, 0, w2, S2, E2, x2, I2, P2, c2 - P2, u2), I2 = k2 = x2 = 0, P2 = c2;
            for (var O2 = 0; O2 < 286; ++O2) S2[O2] = 0;
            for (O2 = 0; O2 < 30; ++O2) E2[O2] = 0;
          }
          var M2 = 2, L2 = 0, A2 = p2, D2 = R2 - T2 & 32767;
          if ($2 > 2 && F2 == y2(c2 - D2)) for (var N2 = Math.min(_2, $2) - 1, q2 = Math.min(32767, c2), B2 = Math.min(258, $2); D2 <= q2 && --A2 && R2 != T2; ) {
            if (e3[c2 + M2] == e3[c2 + M2 - D2]) {
              for (var H2 = 0; H2 < B2 && e3[c2 + H2] == e3[c2 + H2 - D2]; ++H2) ;
              if (H2 > M2) {
                if (M2 = H2, L2 = D2, H2 > N2) break;
                var U2 = Math.min(D2, H2 - 2), z2 = 0;
                for (O2 = 0; O2 < U2; ++O2) {
                  var j2 = c2 - D2 + O2 + 32768 & 32767, W2 = j2 - g2[j2] + 32768 & 32767;
                  W2 > z2 && (z2 = W2, T2 = j2);
                }
              }
            }
            D2 += (R2 = T2) - (T2 = g2[R2]) + 32768 & 32767;
          }
          if (L2) {
            w2[I2++] = 268435456 | bn[M2] << 18 | yn[L2];
            var V2 = 31 & bn[M2], G2 = 31 & yn[L2];
            x2 += _n[V2] + pn[G2], ++S2[257 + V2], ++E2[G2], C2 = c2 + M2, ++k2;
          } else w2[I2++] = e3[c2], ++S2[e3[c2]];
        }
      }
      u2 = Nn(e3, l2, s2, w2, S2, E2, x2, I2, P2, c2 - P2, u2);
    }
    return Rn(a2, 0, n3 + Fn(u2) + r3);
  }(e2, null == t2.level ? 6 : t2.level, null == t2.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e2.length)))) : 12 + t2.mem, i2, n2, !r2);
};
var zn = function(e2, t2, i2) {
  for (; i2; ++t2) e2[t2] = i2, i2 >>>= 8;
};
var jn = function(e2, t2) {
  var i2 = t2.filename;
  if (e2[0] = 31, e2[1] = 139, e2[2] = 8, e2[8] = t2.level < 2 ? 4 : 9 == t2.level ? 2 : 0, e2[9] = 3, 0 != t2.mtime && zn(e2, 4, Math.floor(new Date(t2.mtime || Date.now()) / 1e3)), i2) {
    e2[3] = 8;
    for (var n2 = 0; n2 <= i2.length; ++n2) e2[n2 + 10] = i2.charCodeAt(n2);
  }
};
var Wn = function(e2) {
  return 10 + (e2.filename && e2.filename.length + 1 || 0);
};
function Vn(e2, t2) {
  void 0 === t2 && (t2 = {});
  var i2 = Hn(), n2 = e2.length;
  i2.p(e2);
  var r2 = Un(e2, t2, Wn(t2), 8), s2 = r2.length;
  return jn(r2, t2), zn(r2, s2 - 8, i2.d()), zn(r2, s2 - 4, n2), r2;
}
function Gn(e2, t2) {
  var i2 = e2.length;
  if ("undefined" != typeof TextEncoder) return new TextEncoder().encode(e2);
  for (var n2 = new cn(e2.length + (e2.length >>> 1)), r2 = 0, s2 = function(e3) {
    n2[r2++] = e3;
  }, o2 = 0; o2 < i2; ++o2) {
    if (r2 + 5 > n2.length) {
      var a2 = new cn(r2 + 8 + (i2 - o2 << 1));
      a2.set(n2), n2 = a2;
    }
    var l2 = e2.charCodeAt(o2);
    l2 < 128 || t2 ? s2(l2) : l2 < 2048 ? (s2(192 | l2 >>> 6), s2(128 | 63 & l2)) : l2 > 55295 && l2 < 57344 ? (s2(240 | (l2 = 65536 + (1047552 & l2) | 1023 & e2.charCodeAt(++o2)) >>> 18), s2(128 | l2 >>> 12 & 63), s2(128 | l2 >>> 6 & 63), s2(128 | 63 & l2)) : (s2(224 | l2 >>> 12), s2(128 | l2 >>> 6 & 63), s2(128 | 63 & l2));
  }
  return Rn(n2, 0, r2);
}
var Jn = "[SessionRecording]";
var Yn = B(Jn);
var Kn = 3e5;
var Xn = [Ei.MouseMove, Ei.MouseInteraction, Ei.Scroll, Ei.ViewportResize, Ei.Input, Ei.TouchMove, Ei.MediaInteraction, Ei.Drag];
var Qn = (e2) => ({ rrwebMethod: e2, enqueuedAt: Date.now(), attempt: 1 });
function Zn(e2) {
  return function(e3, t2) {
    for (var i2 = "", n2 = 0; n2 < e3.length; ) {
      var r2 = e3[n2++];
      r2 < 128 || t2 ? i2 += String.fromCharCode(r2) : r2 < 224 ? i2 += String.fromCharCode((31 & r2) << 6 | 63 & e3[n2++]) : r2 < 240 ? i2 += String.fromCharCode((15 & r2) << 12 | (63 & e3[n2++]) << 6 | 63 & e3[n2++]) : (r2 = ((15 & r2) << 18 | (63 & e3[n2++]) << 12 | (63 & e3[n2++]) << 6 | 63 & e3[n2++]) - 65536, i2 += String.fromCharCode(55296 | r2 >> 10, 56320 | 1023 & r2));
    }
    return i2;
  }(Vn(Gn(JSON.stringify(e2))), true);
}
function er(e2) {
  return e2.type === Si.Custom && "sessionIdle" === e2.data.tag;
}
function tr(e2, t2) {
  return t2.some((t3) => "regex" === t3.matching && new RegExp(t3.url).test(e2));
}
var ir = class {
  get sessionIdleThresholdMilliseconds() {
    return this.instance.config.session_recording.session_idle_threshold_ms || 3e5;
  }
  get rrwebRecord() {
    var e2, t2;
    return null == _ || null === (e2 = _.__PosthogExtensions__) || void 0 === e2 || null === (t2 = e2.rrweb) || void 0 === t2 ? void 0 : t2.record;
  }
  get started() {
    return this._captureStarted;
  }
  get sessionManager() {
    if (!this.instance.sessionManager) throw new Error(Jn + " must be started with a valid sessionManager.");
    return this.instance.sessionManager;
  }
  get fullSnapshotIntervalMillis() {
    var e2, t2;
    return "trigger_pending" === this.triggerStatus ? 6e4 : null !== (e2 = null === (t2 = this.instance.config.session_recording) || void 0 === t2 ? void 0 : t2.full_snapshot_interval_millis) && void 0 !== e2 ? e2 : Kn;
  }
  get isSampled() {
    var e2 = this.instance.get_property(we);
    return L(e2) ? e2 : null;
  }
  get sessionDuration() {
    var e2, t2, i2 = null === (e2 = this.buffer) || void 0 === e2 ? void 0 : e2.data[(null === (t2 = this.buffer) || void 0 === t2 ? void 0 : t2.data.length) - 1], { sessionStartTimestamp: n2 } = this.sessionManager.checkAndGetSessionAndWindowId(true);
    return i2 ? i2.timestamp - n2 : null;
  }
  get isRecordingEnabled() {
    var e2 = !!this.instance.get_property(_e), i2 = !this.instance.config.disable_session_recording;
    return t && e2 && i2;
  }
  get isConsoleLogCaptureEnabled() {
    var e2 = !!this.instance.get_property(pe), t2 = this.instance.config.enable_recording_console_log;
    return null != t2 ? t2 : e2;
  }
  get canvasRecording() {
    var e2, t2, i2, n2, r2, s2, o2 = this.instance.config.session_recording.captureCanvas, a2 = this.instance.get_property(ge), l2 = null !== (e2 = null !== (t2 = null == o2 ? void 0 : o2.recordCanvas) && void 0 !== t2 ? t2 : null == a2 ? void 0 : a2.enabled) && void 0 !== e2 && e2, u2 = null !== (i2 = null !== (n2 = null == o2 ? void 0 : o2.canvasFps) && void 0 !== n2 ? n2 : null == a2 ? void 0 : a2.fps) && void 0 !== i2 ? i2 : 0, c2 = null !== (r2 = null !== (s2 = null == o2 ? void 0 : o2.canvasQuality) && void 0 !== s2 ? s2 : null == a2 ? void 0 : a2.quality) && void 0 !== r2 ? r2 : 0;
    return { enabled: l2, fps: ln(u2, 0, 12, "canvas recording fps"), quality: ln(c2, 0, 1, "canvas recording quality") };
  }
  get networkPayloadCapture() {
    var e2, t2, i2 = this.instance.get_property(ve), n2 = { recordHeaders: null === (e2 = this.instance.config.session_recording) || void 0 === e2 ? void 0 : e2.recordHeaders, recordBody: null === (t2 = this.instance.config.session_recording) || void 0 === t2 ? void 0 : t2.recordBody }, r2 = (null == n2 ? void 0 : n2.recordHeaders) || (null == i2 ? void 0 : i2.recordHeaders), s2 = (null == n2 ? void 0 : n2.recordBody) || (null == i2 ? void 0 : i2.recordBody), o2 = C(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance, a2 = !!(L(o2) ? o2 : null == i2 ? void 0 : i2.capturePerformance);
    return r2 || s2 || a2 ? { recordHeaders: r2, recordBody: s2, recordPerformance: a2 } : void 0;
  }
  get sampleRate() {
    var e2 = this.instance.get_property(fe);
    return M(e2) ? e2 : null;
  }
  get minimumDuration() {
    var e2 = this.instance.get_property(me);
    return M(e2) ? e2 : null;
  }
  get status() {
    return this.receivedDecide ? this.isRecordingEnabled ? this._urlBlocked ? "paused" : O(this._linkedFlag) || this._linkedFlagSeen ? "trigger_pending" === this.triggerStatus ? "buffering" : L(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering";
  }
  get urlTriggerStatus() {
    var e2;
    return 0 === this._urlTriggers.length ? "trigger_disabled" : (null === (e2 = this.instance) || void 0 === e2 ? void 0 : e2.get_property(Se)) === this.sessionId ? "trigger_activated" : "trigger_pending";
  }
  get eventTriggerStatus() {
    var e2;
    return 0 === this._eventTriggers.length ? "trigger_disabled" : (null === (e2 = this.instance) || void 0 === e2 ? void 0 : e2.get_property(Ee)) === this.sessionId ? "trigger_activated" : "trigger_pending";
  }
  get triggerStatus() {
    var e2 = "trigger_activated" === this.eventTriggerStatus || "trigger_activated" === this.urlTriggerStatus, t2 = "trigger_pending" === this.eventTriggerStatus || "trigger_pending" === this.urlTriggerStatus;
    return e2 ? "trigger_activated" : t2 ? "trigger_pending" : "trigger_disabled";
  }
  constructor(e2) {
    if (W(this, "queuedRRWebEvents", []), W(this, "isIdle", false), W(this, "_linkedFlagSeen", false), W(this, "_lastActivityTimestamp", Date.now()), W(this, "_linkedFlag", null), W(this, "_removePageViewCaptureHook", void 0), W(this, "_onSessionIdListener", void 0), W(this, "_persistDecideOnSessionListener", void 0), W(this, "_samplingSessionListener", void 0), W(this, "_urlTriggers", []), W(this, "_urlBlocklist", []), W(this, "_urlBlocked", false), W(this, "_eventTriggers", []), W(this, "_removeEventTriggerCaptureHook", void 0), W(this, "_forceAllowLocalhostNetworkCapture", false), W(this, "_onBeforeUnload", () => {
      this._flushBuffer();
    }), W(this, "_onOffline", () => {
      this._tryAddCustomEvent("browser offline", {});
    }), W(this, "_onOnline", () => {
      this._tryAddCustomEvent("browser online", {});
    }), W(this, "_onVisibilityChange", () => {
      if (null != a && a.visibilityState) {
        var e3 = "window " + a.visibilityState;
        this._tryAddCustomEvent(e3, {});
      }
    }), this.instance = e2, this._captureStarted = false, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = false, !this.instance.sessionManager) throw Yn.error("started without valid sessionManager"), new Error(Jn + " started without valid sessionManager. This is a bug.");
    if (this.instance.config.__preview_experimental_cookieless_mode) throw new Error(Jn + " cannot be used with __preview_experimental_cookieless_mode.");
    var { sessionId: t2, windowId: i2 } = this.sessionManager.checkAndGetSessionAndWindowId();
    this.sessionId = t2, this.windowId = i2, this.buffer = this.clearBuffer(), this.sessionIdleThresholdMilliseconds >= this.sessionManager.sessionTimeoutMs && Yn.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds, ") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs, "). Session will never be detected as idle"));
  }
  startIfEnabledOrStop(e2) {
    this.isRecordingEnabled ? (this._startCapture(e2), null == t || t.addEventListener("beforeunload", this._onBeforeUnload), null == t || t.addEventListener("offline", this._onOffline), null == t || t.addEventListener("online", this._onOnline), null == t || t.addEventListener("visibilitychange", this._onVisibilityChange), this._setupSampling(), this._addEventTriggerListener(), O(this._removePageViewCaptureHook) && (this._removePageViewCaptureHook = this.instance.on("eventCaptured", (e3) => {
      try {
        if ("$pageview" === e3.event) {
          var t2 = null != e3 && e3.properties.$current_url ? this._maskUrl(null == e3 ? void 0 : e3.properties.$current_url) : "";
          if (!t2) return;
          this._tryAddCustomEvent("$pageview", { href: t2 });
        }
      } catch (e4) {
        Yn.error("Could not add $pageview to rrweb session", e4);
      }
    })), this._onSessionIdListener || (this._onSessionIdListener = this.sessionManager.onSessionId((e3, t2, i2) => {
      var n2, r2, s2, o2;
      i2 && (this._tryAddCustomEvent("$session_id_change", { sessionId: e3, windowId: t2, changeReason: i2 }), null === (n2 = this.instance) || void 0 === n2 || null === (r2 = n2.persistence) || void 0 === r2 || r2.unregister(Ee), null === (s2 = this.instance) || void 0 === s2 || null === (o2 = s2.persistence) || void 0 === o2 || o2.unregister(Se));
    }))) : this.stopRecording();
  }
  stopRecording() {
    var e2, i2, n2, r2;
    this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = false, null == t || t.removeEventListener("beforeunload", this._onBeforeUnload), null == t || t.removeEventListener("offline", this._onOffline), null == t || t.removeEventListener("online", this._onOnline), null == t || t.removeEventListener("visibilitychange", this._onVisibilityChange), this.clearBuffer(), clearInterval(this._fullSnapshotTimer), null === (e2 = this._removePageViewCaptureHook) || void 0 === e2 || e2.call(this), this._removePageViewCaptureHook = void 0, null === (i2 = this._removeEventTriggerCaptureHook) || void 0 === i2 || i2.call(this), this._removeEventTriggerCaptureHook = void 0, null === (n2 = this._onSessionIdListener) || void 0 === n2 || n2.call(this), this._onSessionIdListener = void 0, null === (r2 = this._samplingSessionListener) || void 0 === r2 || r2.call(this), this._samplingSessionListener = void 0, Yn.info("stopped"));
  }
  makeSamplingDecision(e2) {
    var t2, i2 = this.sessionId !== e2, n2 = this.sampleRate;
    if (M(n2)) {
      var r2, s2 = this.isSampled, o2 = i2 || !L(s2);
      if (o2) r2 = Math.random() < n2;
      else r2 = s2;
      o2 && (r2 ? this._reportStarted("sampled") : Yn.warn("Sample rate (".concat(n2, ") has determined that this sessionId (").concat(e2, ") will not be sent to the server.")), this._tryAddCustomEvent("samplingDecisionMade", { sampleRate: n2, isSampled: r2 })), null === (t2 = this.instance.persistence) || void 0 === t2 || t2.register({ [we]: r2 });
    } else {
      var a2;
      null === (a2 = this.instance.persistence) || void 0 === a2 || a2.register({ [we]: null });
    }
  }
  onRemoteConfig(e2) {
    var t2, i2, n2, r2, s2, o2;
    (this._tryAddCustomEvent("$remote_config_received", e2), this._persistRemoteConfig(e2), this._linkedFlag = (null === (t2 = e2.sessionRecording) || void 0 === t2 ? void 0 : t2.linkedFlag) || null, null !== (i2 = e2.sessionRecording) && void 0 !== i2 && i2.endpoint) && (this._endpoint = null === (o2 = e2.sessionRecording) || void 0 === o2 ? void 0 : o2.endpoint);
    if (this._setupSampling(), !O(this._linkedFlag) && !this._linkedFlagSeen) {
      var a2 = R(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag, l2 = R(this._linkedFlag) ? null : this._linkedFlag.variant;
      this.instance.onFeatureFlags((e3, t3) => {
        var i3 = C(t3) && a2 in t3, n3 = l2 ? t3[a2] === l2 : i3;
        n3 && this._reportStarted("linked_flag_matched", { linkedFlag: a2, linkedVariant: l2 }), this._linkedFlagSeen = n3;
      });
    }
    null !== (n2 = e2.sessionRecording) && void 0 !== n2 && n2.urlTriggers && (this._urlTriggers = e2.sessionRecording.urlTriggers), null !== (r2 = e2.sessionRecording) && void 0 !== r2 && r2.urlBlocklist && (this._urlBlocklist = e2.sessionRecording.urlBlocklist), null !== (s2 = e2.sessionRecording) && void 0 !== s2 && s2.eventTriggers && (this._eventTriggers = e2.sessionRecording.eventTriggers), this.receivedDecide = true, this.startIfEnabledOrStop();
  }
  _setupSampling() {
    M(this.sampleRate) && O(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId((e2) => {
      this.makeSamplingDecision(e2);
    }));
  }
  _persistRemoteConfig(e2) {
    if (this.instance.persistence) {
      var t2, i2 = this.instance.persistence, n2 = () => {
        var t3, n3, r2, s2, o2, a2, l2, u2, c2 = null === (t3 = e2.sessionRecording) || void 0 === t3 ? void 0 : t3.sampleRate, d2 = O(c2) ? null : parseFloat(c2), h2 = null === (n3 = e2.sessionRecording) || void 0 === n3 ? void 0 : n3.minimumDurationMilliseconds;
        i2.register({ [_e]: !!e2.sessionRecording, [pe]: null === (r2 = e2.sessionRecording) || void 0 === r2 ? void 0 : r2.consoleLogRecordingEnabled, [ve]: j({ capturePerformance: e2.capturePerformance }, null === (s2 = e2.sessionRecording) || void 0 === s2 ? void 0 : s2.networkPayloadCapture), [ge]: { enabled: null === (o2 = e2.sessionRecording) || void 0 === o2 ? void 0 : o2.recordCanvas, fps: null === (a2 = e2.sessionRecording) || void 0 === a2 ? void 0 : a2.canvasFps, quality: null === (l2 = e2.sessionRecording) || void 0 === l2 ? void 0 : l2.canvasQuality }, [fe]: d2, [me]: F(h2) ? null : h2, [be]: null === (u2 = e2.sessionRecording) || void 0 === u2 ? void 0 : u2.scriptConfig });
      };
      n2(), null === (t2 = this._persistDecideOnSessionListener) || void 0 === t2 || t2.call(this), this._persistDecideOnSessionListener = this.sessionManager.onSessionId(n2);
    }
  }
  log(e2) {
    var t2, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
    null === (t2 = this.instance.sessionRecording) || void 0 === t2 || t2.onRRwebEmit({ type: 6, data: { plugin: "rrweb/console@1", payload: { level: i2, trace: [], payload: [JSON.stringify(e2)] } }, timestamp: Date.now() });
  }
  _startCapture(e2) {
    if (!F(Object.assign) && !F(Array.from) && !(this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut())) {
      var t2, i2;
      if (this._captureStarted = true, this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord) this._onScriptLoaded();
      else null === (t2 = _.__PosthogExtensions__) || void 0 === t2 || null === (i2 = t2.loadExternalDependency) || void 0 === i2 || i2.call(t2, this.instance, this.scriptName, (e3) => {
        if (e3) return Yn.error("could not load recorder", e3);
        this._onScriptLoaded();
      });
      Yn.info("starting"), "active" === this.status && this._reportStarted(e2 || "recording_initialized");
    }
  }
  get scriptName() {
    var e2, t2, i2;
    return (null === (e2 = this.instance) || void 0 === e2 || null === (t2 = e2.persistence) || void 0 === t2 || null === (i2 = t2.get_property(be)) || void 0 === i2 ? void 0 : i2.script) || "recorder";
  }
  isInteractiveEvent(e2) {
    var t2;
    return 3 === e2.type && -1 !== Xn.indexOf(null === (t2 = e2.data) || void 0 === t2 ? void 0 : t2.source);
  }
  _updateWindowAndSessionIds(e2) {
    var t2 = this.isInteractiveEvent(e2);
    t2 || this.isIdle || e2.timestamp - this._lastActivityTimestamp > this.sessionIdleThresholdMilliseconds && (this.isIdle = true, clearInterval(this._fullSnapshotTimer), this._tryAddCustomEvent("sessionIdle", { eventTimestamp: e2.timestamp, lastActivityTimestamp: this._lastActivityTimestamp, threshold: this.sessionIdleThresholdMilliseconds, bufferLength: this.buffer.data.length, bufferSize: this.buffer.size }), this._flushBuffer());
    var i2 = false;
    if (t2 && (this._lastActivityTimestamp = e2.timestamp, this.isIdle && (this.isIdle = false, this._tryAddCustomEvent("sessionNoLongerIdle", { reason: "user activity", type: e2.type }), i2 = true)), !this.isIdle) {
      var { windowId: n2, sessionId: r2 } = this.sessionManager.checkAndGetSessionAndWindowId(!t2, e2.timestamp), s2 = this.sessionId !== r2, o2 = this.windowId !== n2;
      this.windowId = n2, this.sessionId = r2, s2 || o2 ? (this.stopRecording(), this.startIfEnabledOrStop("session_id_changed")) : i2 && this._scheduleFullSnapshot();
    }
  }
  _tryRRWebMethod(e2) {
    try {
      return e2.rrwebMethod(), true;
    } catch (t2) {
      return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({ enqueuedAt: e2.enqueuedAt || Date.now(), attempt: e2.attempt++, rrwebMethod: e2.rrwebMethod }) : Yn.warn("could not emit queued rrweb event.", t2, e2), false;
    }
  }
  _tryAddCustomEvent(e2, t2) {
    return this._tryRRWebMethod(Qn(() => this.rrwebRecord.addCustomEvent(e2, t2)));
  }
  _tryTakeFullSnapshot() {
    return this._tryRRWebMethod(Qn(() => this.rrwebRecord.takeFullSnapshot()));
  }
  _onScriptLoaded() {
    var e2, t2 = { blockClass: "ph-no-capture", blockSelector: void 0, ignoreClass: "ph-ignore-input", maskTextClass: "ph-mask", maskTextSelector: void 0, maskTextFn: void 0, maskAllInputs: true, maskInputOptions: { password: true }, maskInputFn: void 0, slimDOMOptions: {}, collectFonts: false, inlineStylesheet: true, recordCrossOriginIframes: false }, i2 = this.instance.config.session_recording;
    for (var [n2, r2] of Object.entries(i2 || {})) n2 in t2 && ("maskInputOptions" === n2 ? t2.maskInputOptions = j({ password: true }, r2) : t2[n2] = r2);
    if (this.canvasRecording && this.canvasRecording.enabled && (t2.recordCanvas = true, t2.sampling = { canvas: this.canvasRecording.fps }, t2.dataURLOptions = { type: "image/webp", quality: this.canvasRecording.quality }), this.rrwebRecord) {
      this.mutationRateLimiter = null !== (e2 = this.mutationRateLimiter) && void 0 !== e2 ? e2 : new un(this.rrwebRecord, { refillRate: this.instance.config.session_recording.__mutationRateLimiterRefillRate, bucketSize: this.instance.config.session_recording.__mutationRateLimiterBucketSize, onBlockedNode: (e3, t3) => {
        var i3 = "Too many mutations on node '".concat(e3, "'. Rate limiting. This could be due to SVG animations or something similar");
        Yn.info(i3, { node: t3 }), this.log(Jn + " " + i3, "warn");
      } });
      var s2 = this._gatherRRWebPlugins();
      this.stopRrweb = this.rrwebRecord(j({ emit: (e3) => {
        this.onRRwebEmit(e3);
      }, plugins: s2 }, t2)), this._lastActivityTimestamp = Date.now(), this.isIdle = false, this._tryAddCustomEvent("$session_options", { sessionRecordingOptions: t2, activePlugins: s2.map((e3) => null == e3 ? void 0 : e3.name) }), this._tryAddCustomEvent("$posthog_config", { config: this.instance.config });
    } else Yn.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
  }
  _scheduleFullSnapshot() {
    if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle) {
      var e2 = this.fullSnapshotIntervalMillis;
      e2 && (this._fullSnapshotTimer = setInterval(() => {
        this._tryTakeFullSnapshot();
      }, e2));
    }
  }
  _gatherRRWebPlugins() {
    var e2, t2, i2, n2, r2 = [], s2 = null === (e2 = _.__PosthogExtensions__) || void 0 === e2 || null === (t2 = e2.rrwebPlugins) || void 0 === t2 ? void 0 : t2.getRecordConsolePlugin;
    s2 && this.isConsoleLogCaptureEnabled && r2.push(s2());
    var o2 = null === (i2 = _.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.rrwebPlugins) || void 0 === n2 ? void 0 : n2.getRecordNetworkPlugin;
    this.networkPayloadCapture && I(o2) && (!pt.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? r2.push(o2(an(this.instance.config, this.networkPayloadCapture))) : Yn.info("NetworkCapture not started because we are on localhost."));
    return r2;
  }
  onRRwebEmit(e2) {
    var t2;
    if (this._processQueuedEvents(), e2 && C(e2)) {
      if (e2.type === Si.Meta) {
        var i2 = this._maskUrl(e2.data.href);
        if (this._lastHref = i2, !i2) return;
        e2.data.href = i2;
      } else this._pageViewFallBack();
      if (this._checkUrlTriggerConditions(), "paused" !== this.status || function(e3) {
        return e3.type === Si.Custom && "recording paused" === e3.data.tag;
      }(e2)) {
        e2.type === Si.FullSnapshot && this._scheduleFullSnapshot(), e2.type === Si.FullSnapshot && "trigger_pending" === this.triggerStatus && this.clearBuffer();
        var n2 = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e2) : e2;
        if (n2) {
          var r2 = function(e3) {
            var t3 = e3;
            if (t3 && C(t3) && 6 === t3.type && C(t3.data) && "rrweb/console@1" === t3.data.plugin) {
              t3.data.payload.payload.length > 10 && (t3.data.payload.payload = t3.data.payload.payload.slice(0, 10), t3.data.payload.payload.push("...[truncated]"));
              for (var i3 = [], n3 = 0; n3 < t3.data.payload.payload.length; n3++) t3.data.payload.payload[n3] && t3.data.payload.payload[n3].length > 2e3 ? i3.push(t3.data.payload.payload[n3].slice(0, 2e3) + "...[truncated]") : i3.push(t3.data.payload.payload[n3]);
              return t3.data.payload.payload = i3, e3;
            }
            return e3;
          }(n2);
          if (this._updateWindowAndSessionIds(r2), !this.isIdle || er(r2)) {
            if (er(r2)) {
              var s2 = r2.data.payload;
              if (s2) {
                var o2 = s2.lastActivityTimestamp, a2 = s2.threshold;
                r2.timestamp = o2 + a2;
              }
            }
            var l2 = null === (t2 = this.instance.config.session_recording.compress_events) || void 0 === t2 || t2 ? function(e3) {
              if (yi(e3) < 1024) return e3;
              try {
                if (e3.type === Si.FullSnapshot) return j(j({}, e3), {}, { data: Zn(e3.data), cv: "2024-10" });
                if (e3.type === Si.IncrementalSnapshot && e3.data.source === Ei.Mutation) return j(j({}, e3), {}, { cv: "2024-10", data: j(j({}, e3.data), {}, { texts: Zn(e3.data.texts), attributes: Zn(e3.data.attributes), removes: Zn(e3.data.removes), adds: Zn(e3.data.adds) }) });
                if (e3.type === Si.IncrementalSnapshot && e3.data.source === Ei.StyleSheetRule) return j(j({}, e3), {}, { cv: "2024-10", data: j(j({}, e3.data), {}, { adds: Zn(e3.data.adds), removes: Zn(e3.data.removes) }) });
              } catch (e4) {
                Yn.error("could not compress event - will use uncompressed event", e4);
              }
              return e3;
            }(r2) : r2, u2 = { $snapshot_bytes: yi(l2), $snapshot_data: l2, $session_id: this.sessionId, $window_id: this.windowId };
            "disabled" !== this.status ? this._captureSnapshotBuffered(u2) : this.clearBuffer();
          }
        }
      }
    }
  }
  _pageViewFallBack() {
    if (!this.instance.config.capture_pageview && t) {
      var e2 = this._maskUrl(t.location.href);
      this._lastHref !== e2 && (this._tryAddCustomEvent("$url_changed", { href: e2 }), this._lastHref = e2);
    }
  }
  _processQueuedEvents() {
    if (this.queuedRRWebEvents.length) {
      var e2 = [...this.queuedRRWebEvents];
      this.queuedRRWebEvents = [], e2.forEach((e3) => {
        Date.now() - e3.enqueuedAt <= 2e3 && this._tryRRWebMethod(e3);
      });
    }
  }
  _maskUrl(e2) {
    var t2 = this.instance.config.session_recording;
    if (t2.maskNetworkRequestFn) {
      var i2, n2 = { url: e2 };
      return null === (i2 = n2 = t2.maskNetworkRequestFn(n2)) || void 0 === i2 ? void 0 : i2.url;
    }
    return e2;
  }
  clearBuffer() {
    return this.buffer = { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId }, this.buffer;
  }
  _flushBuffer() {
    this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
    var e2 = this.minimumDuration, t2 = this.sessionDuration, i2 = M(t2) && t2 >= 0, n2 = M(e2) && i2 && t2 < e2;
    if ("buffering" === this.status || "paused" === this.status || n2) return this.flushBufferTimer = setTimeout(() => {
      this._flushBuffer();
    }, 2e3), this.buffer;
    this.buffer.data.length > 0 && wi(this.buffer).forEach((e3) => {
      this._captureSnapshot({ $snapshot_bytes: e3.size, $snapshot_data: e3.data, $session_id: e3.sessionId, $window_id: e3.windowId, $lib: "web", $lib_version: p.LIB_VERSION });
    });
    return this.clearBuffer();
  }
  _captureSnapshotBuffered(e2) {
    var t2, i2 = 2 + ((null === (t2 = this.buffer) || void 0 === t2 ? void 0 : t2.data.length) || 0);
    !this.isIdle && (this.buffer.size + e2.$snapshot_bytes + i2 > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), this.buffer.size += e2.$snapshot_bytes, this.buffer.data.push(e2.$snapshot_data), this.flushBufferTimer || this.isIdle || (this.flushBufferTimer = setTimeout(() => {
      this._flushBuffer();
    }, 2e3));
  }
  _captureSnapshot(e2) {
    this.instance.capture("$snapshot", e2, { _url: this.instance.requestRouter.endpointFor("api", this._endpoint), _noTruncate: true, _batchKey: "recordings", skip_client_rate_limiting: true });
  }
  _checkUrlTriggerConditions() {
    if (void 0 !== t && t.location.href) {
      var e2 = t.location.href, i2 = "paused" === this.status, n2 = tr(e2, this._urlBlocklist);
      n2 && !i2 ? this._pauseRecording() : !n2 && i2 && this._resumeRecording(), tr(e2, this._urlTriggers) && this._activateTrigger("url");
    }
  }
  _activateTrigger(e2) {
    var t2, i2;
    "trigger_pending" === this.triggerStatus && (null === (t2 = this.instance) || void 0 === t2 || null === (i2 = t2.persistence) || void 0 === i2 || i2.register({ ["url" === e2 ? Se : Ee]: this.sessionId }), this._flushBuffer(), this._reportStarted(e2 + "_trigger_matched"));
  }
  _pauseRecording() {
    "paused" !== this.status && (this._urlBlocked = true, clearInterval(this._fullSnapshotTimer), Yn.info("recording paused due to URL blocker"), this._tryAddCustomEvent("recording paused", { reason: "url blocker" }));
  }
  _resumeRecording() {
    "paused" === this.status && (this._urlBlocked = false, this._tryTakeFullSnapshot(), this._scheduleFullSnapshot(), this._tryAddCustomEvent("recording resumed", { reason: "left blocked url" }), Yn.info("recording resumed"));
  }
  _addEventTriggerListener() {
    0 !== this._eventTriggers.length && O(this._removeEventTriggerCaptureHook) && (this._removeEventTriggerCaptureHook = this.instance.on("eventCaptured", (e2) => {
      try {
        this._eventTriggers.includes(e2.event) && this._activateTrigger("event");
      } catch (e3) {
        Yn.error("Could not activate event trigger", e3);
      }
    }));
  }
  overrideLinkedFlag() {
    this._linkedFlagSeen = true, this._tryTakeFullSnapshot(), this._reportStarted("linked_flag_overridden");
  }
  overrideSampling() {
    var e2;
    null === (e2 = this.instance.persistence) || void 0 === e2 || e2.register({ [we]: true }), this._tryTakeFullSnapshot(), this._reportStarted("sampling_overridden");
  }
  overrideTrigger(e2) {
    this._activateTrigger(e2);
  }
  _reportStarted(e2, t2) {
    this.instance.register_for_session({ $session_recording_start_reason: e2 }), Yn.info(e2.replace("_", " "), t2), m(["recording_initialized", "session_id_changed"], e2) || this._tryAddCustomEvent(e2, t2);
  }
};
var nr = B("[RemoteConfig]");
var rr = class {
  constructor(e2) {
    this.instance = e2;
  }
  get remoteConfig() {
    var e2, t2;
    return null === (e2 = _._POSTHOG_REMOTE_CONFIG) || void 0 === e2 || null === (t2 = e2[this.instance.config.token]) || void 0 === t2 ? void 0 : t2.config;
  }
  _loadRemoteConfigJs(e2) {
    var t2, i2, n2;
    null !== (t2 = _.__PosthogExtensions__) && void 0 !== t2 && t2.loadExternalDependency ? null === (i2 = _.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.loadExternalDependency) || void 0 === n2 || n2.call(i2, this.instance, "remote-config", () => e2(this.remoteConfig)) : (nr.error("PostHog Extensions not found. Cannot load remote config."), e2());
  }
  _loadRemoteConfigJSON(e2) {
    this.instance._send_request({ method: "GET", url: this.instance.requestRouter.endpointFor("assets", "/array/".concat(this.instance.config.token, "/config")), callback: (t2) => {
      e2(t2.json);
    } });
  }
  load() {
    try {
      if (this.remoteConfig) return nr.info("Using preloaded remote config", this.remoteConfig), void this.onRemoteConfig(this.remoteConfig);
      if (this.instance.config.advanced_disable_decide) return void nr.warn("Remote config is disabled. Falling back to local config.");
      this._loadRemoteConfigJs((e2) => {
        if (!e2) return nr.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((e3) => {
          this.onRemoteConfig(e3);
        });
        this.onRemoteConfig(e2);
      });
    } catch (e2) {
      nr.error("Error loading remote config", e2);
    }
  }
  onRemoteConfig(e2) {
    e2 ? this.instance.config.__preview_remote_config ? (this.instance._onRemoteConfig(e2), false !== e2.hasFeatureFlags && this.instance.featureFlags.ensureFlagsLoaded()) : nr.info("__preview_remote_config is disabled. Logging config instead", e2) : nr.error("Failed to fetch remote config from PostHog.");
  }
};
var sr;
var or = null != t && t.location ? bt(t.location.hash, "__posthog") || bt(location.hash, "state") : null;
var ar = "_postHogToolbarParams";
var lr = B("[Toolbar]");
!function(e2) {
  e2[e2.UNINITIALIZED = 0] = "UNINITIALIZED", e2[e2.LOADING = 1] = "LOADING", e2[e2.LOADED = 2] = "LOADED";
}(sr || (sr = {}));
var ur = class {
  constructor(e2) {
    this.instance = e2;
  }
  setToolbarState(e2) {
    _.ph_toolbar_state = e2;
  }
  getToolbarState() {
    var e2;
    return null !== (e2 = _.ph_toolbar_state) && void 0 !== e2 ? e2 : sr.UNINITIALIZED;
  }
  maybeLoadToolbar() {
    var e2, i2, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    if (!t || !a) return false;
    n2 = null !== (e2 = n2) && void 0 !== e2 ? e2 : t.location, s2 = null !== (i2 = s2) && void 0 !== i2 ? i2 : t.history;
    try {
      if (!r2) {
        try {
          t.localStorage.setItem("test", "test"), t.localStorage.removeItem("test");
        } catch (e3) {
          return false;
        }
        r2 = null == t ? void 0 : t.localStorage;
      }
      var o2, l2 = or || bt(n2.hash, "__posthog") || bt(n2.hash, "state"), u2 = l2 ? Q(() => JSON.parse(atob(decodeURIComponent(l2)))) || Q(() => JSON.parse(decodeURIComponent(l2))) : null;
      return u2 && "ph_authorize" === u2.action ? ((o2 = u2).source = "url", o2 && Object.keys(o2).length > 0 && (u2.desiredHash ? n2.hash = u2.desiredHash : s2 ? s2.replaceState(s2.state, "", n2.pathname + n2.search) : n2.hash = "")) : ((o2 = JSON.parse(r2.getItem(ar) || "{}")).source = "localstorage", delete o2.userIntent), !(!o2.token || this.instance.config.token !== o2.token) && (this.loadToolbar(o2), true);
    } catch (e3) {
      return false;
    }
  }
  _callLoadToolbar(e2) {
    var t2 = _.ph_load_toolbar || _.ph_load_editor;
    !O(t2) && I(t2) ? t2(e2, this.instance) : lr.warn("No toolbar load function found");
  }
  loadToolbar(e2) {
    var i2 = !(null == a || !a.getElementById(Ne));
    if (!t || i2) return false;
    var n2 = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, r2 = j(j({ token: this.instance.config.token }, e2), {}, { apiURL: this.instance.requestRouter.endpointFor("ui") }, n2 ? { instrument: false } : {});
    if (t.localStorage.setItem(ar, JSON.stringify(j(j({}, r2), {}, { source: void 0 }))), this.getToolbarState() === sr.LOADED) this._callLoadToolbar(r2);
    else if (this.getToolbarState() === sr.UNINITIALIZED) {
      var s2, o2;
      this.setToolbarState(sr.LOADING), null === (s2 = _.__PosthogExtensions__) || void 0 === s2 || null === (o2 = s2.loadExternalDependency) || void 0 === o2 || o2.call(s2, this.instance, "toolbar", (e3) => {
        if (e3) return lr.error("[Toolbar] Failed to load", e3), void this.setToolbarState(sr.UNINITIALIZED);
        this.setToolbarState(sr.LOADED), this._callLoadToolbar(r2);
      }), ie(t, "turbolinks:load", () => {
        this.setToolbarState(sr.UNINITIALIZED), this.loadToolbar(r2);
      });
    }
    return true;
  }
  _loadEditor(e2) {
    return this.loadToolbar(e2);
  }
  maybeLoadEditor() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    return this.maybeLoadToolbar(e2, t2, i2);
  }
};
var cr = class {
  constructor(e2) {
    W(this, "isPaused", true), W(this, "queue", []), W(this, "flushTimeoutMs", 3e3), this.sendRequest = e2;
  }
  enqueue(e2) {
    this.queue.push(e2), this.flushTimeout || this.setFlushTimeout();
  }
  unload() {
    this.clearFlushTimeout();
    var e2 = this.queue.length > 0 ? this.formatQueue() : {}, t2 = Object.values(e2), i2 = [...t2.filter((e3) => 0 === e3.url.indexOf("/e")), ...t2.filter((e3) => 0 !== e3.url.indexOf("/e"))];
    i2.map((e3) => {
      this.sendRequest(j(j({}, e3), {}, { transport: "sendBeacon" }));
    });
  }
  enable() {
    this.isPaused = false, this.setFlushTimeout();
  }
  setFlushTimeout() {
    var e2 = this;
    this.isPaused || (this.flushTimeout = setTimeout(() => {
      if (this.clearFlushTimeout(), this.queue.length > 0) {
        var t2 = this.formatQueue(), i2 = function(i3) {
          var n3 = t2[i3], r2 = (/* @__PURE__ */ new Date()).getTime();
          n3.data && x(n3.data) && Y(n3.data, (e3) => {
            e3.offset = Math.abs(e3.timestamp - r2), delete e3.timestamp;
          }), e2.sendRequest(n3);
        };
        for (var n2 in t2) i2(n2);
      }
    }, this.flushTimeoutMs));
  }
  clearFlushTimeout() {
    clearTimeout(this.flushTimeout), this.flushTimeout = void 0;
  }
  formatQueue() {
    var e2 = {};
    return Y(this.queue, (t2) => {
      var i2, n2 = t2, r2 = (n2 ? n2.batchKey : null) || n2.url;
      F(e2[r2]) && (e2[r2] = j(j({}, n2), {}, { data: [] })), null === (i2 = e2[r2].data) || void 0 === i2 || i2.push(n2.data);
    }), this.queue = [], e2;
  }
};
var dr = function(e2) {
  var t2, i2, n2, r2, s2 = "";
  for (t2 = i2 = 0, n2 = (e2 = (e2 + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, r2 = 0; r2 < n2; r2++) {
    var o2 = e2.charCodeAt(r2), a2 = null;
    o2 < 128 ? i2++ : a2 = o2 > 127 && o2 < 2048 ? String.fromCharCode(o2 >> 6 | 192, 63 & o2 | 128) : String.fromCharCode(o2 >> 12 | 224, o2 >> 6 & 63 | 128, 63 & o2 | 128), $(a2) || (i2 > t2 && (s2 += e2.substring(t2, i2)), s2 += a2, t2 = i2 = r2 + 1);
  }
  return i2 > t2 && (s2 += e2.substring(t2, e2.length)), s2;
};
var hr = !!c || !!u;
var _r = "text/plain";
var pr = (e2, t2) => {
  var [i2, n2] = e2.split("?"), r2 = j({}, t2);
  null == n2 || n2.split("&").forEach((e3) => {
    var [t3] = e3.split("=");
    delete r2[t3];
  });
  var s2 = ft(r2);
  return s2 = s2 ? (n2 ? n2 + "&" : "") + s2 : n2, "".concat(i2, "?").concat(s2);
};
var vr = (e2, t2) => JSON.stringify(e2, (e3, t3) => "bigint" == typeof t3 ? t3.toString() : t3, t2);
var gr = (t2) => {
  var { data: i2, compression: n2 } = t2;
  if (i2) {
    if (n2 === e.GZipJS) {
      var r2 = Vn(Gn(vr(i2)), { mtime: 0 }), s2 = new Blob([r2], { type: _r });
      return { contentType: _r, body: s2, estimatedSize: s2.size };
    }
    if (n2 === e.Base64) {
      var o2 = function(e2) {
        var t3, i3, n3, r3, s3, o3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a3 = 0, l3 = 0, u2 = "", c2 = [];
        if (!e2) return e2;
        e2 = dr(e2);
        do {
          t3 = (s3 = e2.charCodeAt(a3++) << 16 | e2.charCodeAt(a3++) << 8 | e2.charCodeAt(a3++)) >> 18 & 63, i3 = s3 >> 12 & 63, n3 = s3 >> 6 & 63, r3 = 63 & s3, c2[l3++] = o3.charAt(t3) + o3.charAt(i3) + o3.charAt(n3) + o3.charAt(r3);
        } while (a3 < e2.length);
        switch (u2 = c2.join(""), e2.length % 3) {
          case 1:
            u2 = u2.slice(0, -2) + "==";
            break;
          case 2:
            u2 = u2.slice(0, -1) + "=";
        }
        return u2;
      }(vr(i2)), a2 = ((e2) => "data=" + encodeURIComponent("string" == typeof e2 ? e2 : vr(e2)))(o2);
      return { contentType: "application/x-www-form-urlencoded", body: a2, estimatedSize: new Blob([a2]).size };
    }
    var l2 = vr(i2);
    return { contentType: "application/json", body: l2, estimatedSize: new Blob([l2]).size };
  }
};
var fr = [];
u && fr.push({ transport: "fetch", method: (e2) => {
  var t2, i2, { contentType: n2, body: r2, estimatedSize: s2 } = null !== (t2 = gr(e2)) && void 0 !== t2 ? t2 : {}, o2 = new Headers();
  Y(e2.headers, function(e3, t3) {
    o2.append(t3, e3);
  }), n2 && o2.append("Content-Type", n2);
  var a2 = e2.url, l2 = null;
  if (d) {
    var c2 = new d();
    l2 = { signal: c2.signal, timeout: setTimeout(() => c2.abort(), e2.timeout) };
  }
  u(a2, j({ method: (null == e2 ? void 0 : e2.method) || "GET", headers: o2, keepalive: "POST" === e2.method && (s2 || 0) < 52428.8, body: r2, signal: null === (i2 = l2) || void 0 === i2 ? void 0 : i2.signal }, e2.fetchOptions)).then((t3) => t3.text().then((i3) => {
    var n3, r3 = { statusCode: t3.status, text: i3 };
    if (200 === t3.status) try {
      r3.json = JSON.parse(i3);
    } catch (e3) {
      q.error(e3);
    }
    null === (n3 = e2.callback) || void 0 === n3 || n3.call(e2, r3);
  })).catch((t3) => {
    var i3;
    q.error(t3), null === (i3 = e2.callback) || void 0 === i3 || i3.call(e2, { statusCode: 0, text: t3 });
  }).finally(() => l2 ? clearTimeout(l2.timeout) : null);
} }), c && fr.push({ transport: "XHR", method: (e2) => {
  var t2, i2 = new c();
  i2.open(e2.method || "GET", e2.url, true);
  var { contentType: n2, body: r2 } = null !== (t2 = gr(e2)) && void 0 !== t2 ? t2 : {};
  Y(e2.headers, function(e3, t3) {
    i2.setRequestHeader(t3, e3);
  }), n2 && i2.setRequestHeader("Content-Type", n2), e2.timeout && (i2.timeout = e2.timeout), i2.withCredentials = true, i2.onreadystatechange = () => {
    if (4 === i2.readyState) {
      var t3, n3 = { statusCode: i2.status, text: i2.responseText };
      if (200 === i2.status) try {
        n3.json = JSON.parse(i2.responseText);
      } catch (e3) {
      }
      null === (t3 = e2.callback) || void 0 === t3 || t3.call(e2, n3);
    }
  }, i2.send(r2);
} }), null != o && o.sendBeacon && fr.push({ transport: "sendBeacon", method: (e2) => {
  var t2 = pr(e2.url, { beacon: "1" });
  try {
    var i2, { contentType: n2, body: r2 } = null !== (i2 = gr(e2)) && void 0 !== i2 ? i2 : {}, s2 = "string" == typeof r2 ? new Blob([r2], { type: n2 }) : r2;
    o.sendBeacon(t2, s2);
  } catch (e3) {
  }
} });
var mr = ["retriesPerformedSoFar"];
var br = class {
  constructor(e2) {
    W(this, "isPolling", false), W(this, "pollIntervalMs", 3e3), W(this, "queue", []), this.instance = e2, this.queue = [], this.areWeOnline = true, !F(t) && "onLine" in t.navigator && (this.areWeOnline = t.navigator.onLine, t.addEventListener("online", () => {
      this.areWeOnline = true, this.flush();
    }), t.addEventListener("offline", () => {
      this.areWeOnline = false;
    }));
  }
  retriableRequest(e2) {
    var { retriesPerformedSoFar: t2 } = e2, i2 = V(e2, mr);
    M(t2) && t2 > 0 && (i2.url = pr(i2.url, { retry_count: t2 })), this.instance._send_request(j(j({}, i2), {}, { callback: (e3) => {
      var n2;
      200 !== e3.statusCode && (e3.statusCode < 400 || e3.statusCode >= 500) && (null != t2 ? t2 : 0) < 10 ? this.enqueue(j({ retriesPerformedSoFar: t2 }, i2)) : null === (n2 = i2.callback) || void 0 === n2 || n2.call(i2, e3);
    } }));
  }
  enqueue(e2) {
    var t2 = e2.retriesPerformedSoFar || 0;
    e2.retriesPerformedSoFar = t2 + 1;
    var i2 = function(e3) {
      var t3 = 3e3 * Math.pow(2, e3), i3 = t3 / 2, n3 = Math.min(18e5, t3), r3 = (Math.random() - 0.5) * (n3 - i3);
      return Math.ceil(n3 + r3);
    }(t2), n2 = Date.now() + i2;
    this.queue.push({ retryAt: n2, requestOptions: e2 });
    var r2 = "Enqueued failed request for retry in ".concat(i2);
    navigator.onLine || (r2 += " (Browser is offline)"), q.warn(r2), this.isPolling || (this.isPolling = true, this.poll());
  }
  poll() {
    this.poller && clearTimeout(this.poller), this.poller = setTimeout(() => {
      this.areWeOnline && this.queue.length > 0 && this.flush(), this.poll();
    }, this.pollIntervalMs);
  }
  flush() {
    var e2 = Date.now(), t2 = [], i2 = this.queue.filter((i3) => i3.retryAt < e2 || (t2.push(i3), false));
    if (this.queue = t2, i2.length > 0) for (var { requestOptions: n2 } of i2) this.retriableRequest(n2);
  }
  unload() {
    for (var { requestOptions: e2 } of (this.poller && (clearTimeout(this.poller), this.poller = void 0), this.queue)) try {
      this.instance._send_request(j(j({}, e2), {}, { transport: "sendBeacon" }));
    } catch (e3) {
      q.error(e3);
    }
    this.queue = [];
  }
};
var yr;
var wr = B("[SessionId]");
var Sr = class {
  constructor(e2, t2, i2) {
    var n2;
    if (W(this, "_sessionIdChangedHandlers", []), !e2.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
    if (e2.config.__preview_experimental_cookieless_mode) throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode");
    this.config = e2.config, this.persistence = e2.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = t2 || Ze, this._windowIdGenerator = i2 || Ze;
    var r2 = this.config.persistence_name || this.config.token, s2 = this.config.session_idle_timeout_seconds || 1800;
    if (this._sessionTimeoutMs = 1e3 * ln(s2, 60, 36e3, "session_idle_timeout_seconds", 1800), e2.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }), this.resetIdleTimer(), this._window_id_storage_key = "ph_" + r2 + "_window_id", this._primary_window_exists_storage_key = "ph_" + r2 + "_primary_window_exists", this._canUseSessionStorage()) {
      var o2 = _t.parse(this._window_id_storage_key), a2 = _t.parse(this._primary_window_exists_storage_key);
      o2 && !a2 ? this._windowId = o2 : _t.remove(this._window_id_storage_key), _t.set(this._primary_window_exists_storage_key, true);
    }
    if (null !== (n2 = this.config.bootstrap) && void 0 !== n2 && n2.sessionID) try {
      var l2 = ((e3) => {
        var t3 = e3.replace(/-/g, "");
        if (32 !== t3.length) throw new Error("Not a valid UUID");
        if ("7" !== t3[12]) throw new Error("Not a UUIDv7");
        return parseInt(t3.substring(0, 12), 16);
      })(this.config.bootstrap.sessionID);
      this._setSessionId(this.config.bootstrap.sessionID, (/* @__PURE__ */ new Date()).getTime(), l2);
    } catch (e3) {
      wr.error("Invalid sessionID in bootstrap", e3);
    }
    this._listenToReloadWindow();
  }
  get sessionTimeoutMs() {
    return this._sessionTimeoutMs;
  }
  onSessionId(e2) {
    return F(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e2), this._sessionId && e2(this._sessionId, this._windowId), () => {
      this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((t2) => t2 !== e2);
    };
  }
  _canUseSessionStorage() {
    return "memory" !== this.config.persistence && !this.persistence.disabled && _t.is_supported();
  }
  _setWindowId(e2) {
    e2 !== this._windowId && (this._windowId = e2, this._canUseSessionStorage() && _t.set(this._window_id_storage_key, e2));
  }
  _getWindowId() {
    return this._windowId ? this._windowId : this._canUseSessionStorage() ? _t.parse(this._window_id_storage_key) : null;
  }
  _setSessionId(e2, t2, i2) {
    e2 === this._sessionId && t2 === this._sessionActivityTimestamp && i2 === this._sessionStartTimestamp || (this._sessionStartTimestamp = i2, this._sessionActivityTimestamp = t2, this._sessionId = e2, this.persistence.register({ [ye]: [t2, e2, i2] }));
  }
  _getSessionId() {
    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
    var e2 = this.persistence.props[ye];
    return x(e2) && 2 === e2.length && e2.push(e2[0]), e2 || [0, null, 0];
  }
  resetSessionId() {
    this._setSessionId(null, null, null);
  }
  _listenToReloadWindow() {
    null == t || t.addEventListener("beforeunload", () => {
      this._canUseSessionStorage() && _t.remove(this._primary_window_exists_storage_key);
    });
  }
  checkAndGetSessionAndWindowId() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (this.config.__preview_experimental_cookieless_mode) throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode");
    var i2 = t2 || (/* @__PURE__ */ new Date()).getTime(), [n2, r2, s2] = this._getSessionId(), o2 = this._getWindowId(), a2 = M(s2) && s2 > 0 && Math.abs(i2 - s2) > 864e5, l2 = false, u2 = !r2, c2 = !e2 && Math.abs(i2 - n2) > this.sessionTimeoutMs;
    u2 || c2 || a2 ? (r2 = this._sessionIdGenerator(), o2 = this._windowIdGenerator(), wr.info("new session ID generated", { sessionId: r2, windowId: o2, changeReason: { noSessionId: u2, activityTimeout: c2, sessionPastMaximumLength: a2 } }), s2 = i2, l2 = true) : o2 || (o2 = this._windowIdGenerator(), l2 = true);
    var d2 = 0 === n2 || !e2 || a2 ? i2 : n2, h2 = 0 === s2 ? (/* @__PURE__ */ new Date()).getTime() : s2;
    return this._setWindowId(o2), this._setSessionId(r2, d2, h2), e2 || this.resetIdleTimer(), l2 && this._sessionIdChangedHandlers.forEach((e3) => e3(r2, o2, l2 ? { noSessionId: u2, activityTimeout: c2, sessionPastMaximumLength: a2 } : void 0)), { sessionId: r2, windowId: o2, sessionStartTimestamp: h2, changeReason: l2 ? { noSessionId: u2, activityTimeout: c2, sessionPastMaximumLength: a2 } : void 0, lastActivityTimestamp: n2 };
  }
  resetIdleTimer() {
    clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout(() => {
      this.resetSessionId();
    }, 1.1 * this.sessionTimeoutMs);
  }
};
!function(e2) {
  e2.US = "us", e2.EU = "eu", e2.CUSTOM = "custom";
}(yr || (yr = {}));
var Er = "i.posthog.com";
var kr = class {
  constructor(e2) {
    W(this, "_regionCache", {}), this.instance = e2;
  }
  get apiHost() {
    var e2 = this.instance.config.api_host.trim().replace(/\/$/, "");
    return "https://app.posthog.com" === e2 ? "https://us.i.posthog.com" : e2;
  }
  get uiHost() {
    var e2, t2 = null === (e2 = this.instance.config.ui_host) || void 0 === e2 ? void 0 : e2.replace(/\/$/, "");
    return t2 || (t2 = this.apiHost.replace(".".concat(Er), ".posthog.com")), "https://app.posthog.com" === t2 ? "https://us.posthog.com" : t2;
  }
  get region() {
    return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = yr.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = yr.EU : this._regionCache[this.apiHost] = yr.CUSTOM), this._regionCache[this.apiHost];
  }
  endpointFor(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if (t2 && (t2 = "/" === t2[0] ? t2 : "/".concat(t2)), "ui" === e2) return this.uiHost + t2;
    if (this.region === yr.CUSTOM) return this.apiHost + t2;
    var i2 = Er + t2;
    switch (e2) {
      case "assets":
        return "https://".concat(this.region, "-assets.").concat(i2);
      case "api":
        return "https://".concat(this.region, ".").concat(i2);
    }
  }
};
var xr = "posthog-js";
function Ir(e2) {
  var { organization: t2, projectId: i2, prefix: n2, severityAllowList: r2 = ["error"] } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return (s2) => {
    var o2, a2, l2, u2, c2;
    if (!("*" === r2 || r2.includes(s2.level)) || !e2.__loaded) return s2;
    s2.tags || (s2.tags = {});
    var d2 = e2.requestRouter.endpointFor("ui", "/project/".concat(e2.config.token, "/person/").concat(e2.get_distinct_id()));
    s2.tags["PostHog Person URL"] = d2, e2.sessionRecordingStarted() && (s2.tags["PostHog Recording URL"] = e2.get_session_replay_url({ withTimestamp: true }));
    var h2 = (null === (o2 = s2.exception) || void 0 === o2 ? void 0 : o2.values) || [];
    h2.map((e3) => {
      e3.stacktrace && (e3.stacktrace.type = "raw");
    });
    var _2 = { $exception_message: (null === (a2 = h2[0]) || void 0 === a2 ? void 0 : a2.value) || s2.message, $exception_type: null === (l2 = h2[0]) || void 0 === l2 ? void 0 : l2.type, $exception_personURL: d2, $exception_level: s2.level, $exception_list: h2, $sentry_event_id: s2.event_id, $sentry_exception: s2.exception, $sentry_exception_message: (null === (u2 = h2[0]) || void 0 === u2 ? void 0 : u2.value) || s2.message, $sentry_exception_type: null === (c2 = h2[0]) || void 0 === c2 ? void 0 : c2.type, $sentry_tags: s2.tags };
    return t2 && i2 && (_2.$sentry_url = (n2 || "https://sentry.io/organizations/") + t2 + "/issues/?project=" + i2 + "&query=" + s2.event_id), e2.exceptions.sendExceptionEvent(_2), s2;
  };
}
var Cr = class {
  constructor(e2, t2, i2, n2, r2) {
    this.name = xr, this.setupOnce = function(s2) {
      s2(Ir(e2, { organization: t2, projectId: i2, prefix: n2, severityAllowList: r2 }));
    };
  }
};
var Pr;
var Fr;
var Rr;
var Tr = B("[SegmentIntegration]");
function $r(e2, t2) {
  var i2 = e2.config.segment;
  if (!i2) return t2();
  !function(e3, t3) {
    var i3 = e3.config.segment;
    if (!i3) return t3();
    var n2 = (i4) => {
      var n3 = () => i4.anonymousId() || Ze();
      e3.config.get_device_id = n3, i4.id() && (e3.register({ distinct_id: i4.id(), $device_id: n3() }), e3.persistence.set_property(Te, "identified")), t3();
    }, r2 = i3.user();
    "then" in r2 && I(r2.then) ? r2.then((e4) => n2(e4)) : n2(r2);
  }(e2, () => {
    i2.register(((e3) => {
      Promise && Promise.resolve || Tr.warn("This browser does not have Promise support, and can not use the segment integration");
      var t3 = (t4, i3) => {
        var n2;
        if (!i3) return t4;
        t4.event.userId || t4.event.anonymousId === e3.get_distinct_id() || (Tr.info("No userId set, resetting PostHog"), e3.reset()), t4.event.userId && t4.event.userId !== e3.get_distinct_id() && (Tr.info("UserId set, identifying with PostHog"), e3.identify(t4.event.userId));
        var r2 = e3._calculate_event_properties(i3, null !== (n2 = t4.event.properties) && void 0 !== n2 ? n2 : {}, /* @__PURE__ */ new Date());
        return t4.event.properties = Object.assign({}, r2, t4.event.properties), t4;
      };
      return { name: "PostHog JS", type: "enrichment", version: "1.0.0", isLoaded: () => true, load: () => Promise.resolve(), track: (e4) => t3(e4, e4.event.event), page: (e4) => t3(e4, "$pageview"), identify: (e4) => t3(e4, "$identify"), screen: (e4) => t3(e4, "$screen") };
    })(e2)).then(() => {
      t2();
    });
  });
}
var Or = class {
  constructor(e2) {
    this._instance = e2;
  }
  doPageView(e2, i2) {
    var n2, r2 = this._previousPageViewProperties(e2, i2);
    return this._currentPageview = { pathname: null !== (n2 = null == t ? void 0 : t.location.pathname) && void 0 !== n2 ? n2 : "", pageViewId: i2, timestamp: e2 }, this._instance.scrollManager.resetContext(), r2;
  }
  doPageLeave(e2) {
    var t2;
    return this._previousPageViewProperties(e2, null === (t2 = this._currentPageview) || void 0 === t2 ? void 0 : t2.pageViewId);
  }
  doEvent() {
    var e2;
    return { $pageview_id: null === (e2 = this._currentPageview) || void 0 === e2 ? void 0 : e2.pageViewId };
  }
  _previousPageViewProperties(e2, t2) {
    var i2 = this._currentPageview;
    if (!i2) return { $pageview_id: t2 };
    var n2 = { $pageview_id: t2, $prev_pageview_id: i2.pageViewId }, r2 = this._instance.scrollManager.getContext();
    if (r2 && !this._instance.config.disable_scroll_properties) {
      var { maxScrollHeight: s2, lastScrollY: o2, maxScrollY: a2, maxContentHeight: l2, lastContentY: u2, maxContentY: c2 } = r2;
      if (!(F(s2) || F(o2) || F(a2) || F(l2) || F(u2) || F(c2))) {
        s2 = Math.ceil(s2), o2 = Math.ceil(o2), a2 = Math.ceil(a2), l2 = Math.ceil(l2), u2 = Math.ceil(u2), c2 = Math.ceil(c2);
        var d2 = s2 <= 1 ? 1 : ln(o2 / s2, 0, 1), h2 = s2 <= 1 ? 1 : ln(a2 / s2, 0, 1), _2 = l2 <= 1 ? 1 : ln(u2 / l2, 0, 1), p2 = l2 <= 1 ? 1 : ln(c2 / l2, 0, 1);
        n2 = K(n2, { $prev_pageview_last_scroll: o2, $prev_pageview_last_scroll_percentage: d2, $prev_pageview_max_scroll: a2, $prev_pageview_max_scroll_percentage: h2, $prev_pageview_last_content: u2, $prev_pageview_last_content_percentage: _2, $prev_pageview_max_content: c2, $prev_pageview_max_content_percentage: p2 });
      }
    }
    return i2.pathname && (n2.$prev_pageview_pathname = i2.pathname), i2.timestamp && (n2.$prev_pageview_duration = (e2.getTime() - i2.timestamp.getTime()) / 1e3), n2;
  }
};
!function(e2) {
  e2.Popover = "popover", e2.API = "api", e2.Widget = "widget";
}(Pr || (Pr = {})), function(e2) {
  e2.Open = "open", e2.MultipleChoice = "multiple_choice", e2.SingleChoice = "single_choice", e2.Rating = "rating", e2.Link = "link";
}(Fr || (Fr = {})), function(e2) {
  e2.NextQuestion = "next_question", e2.End = "end", e2.ResponseBased = "response_based", e2.SpecificQuestion = "specific_question";
}(Rr || (Rr = {}));
var Mr = class {
  constructor() {
    W(this, "events", {}), this.events = {};
  }
  on(e2, t2) {
    return this.events[e2] || (this.events[e2] = []), this.events[e2].push(t2), () => {
      this.events[e2] = this.events[e2].filter((e3) => e3 !== t2);
    };
  }
  emit(e2, t2) {
    for (var i2 of this.events[e2] || []) i2(t2);
    for (var n2 of this.events["*"] || []) n2(e2, t2);
  }
};
var Lr = class _Lr {
  constructor(e2) {
    W(this, "_debugEventEmitter", new Mr()), W(this, "checkStep", (e3, t2) => this.checkStepEvent(e3, t2) && this.checkStepUrl(e3, t2) && this.checkStepElement(e3, t2)), W(this, "checkStepEvent", (e3, t2) => null == t2 || !t2.event || (null == e3 ? void 0 : e3.event) === (null == t2 ? void 0 : t2.event)), this.instance = e2, this.actionEvents = /* @__PURE__ */ new Set(), this.actionRegistry = /* @__PURE__ */ new Set();
  }
  init() {
    var e2;
    if (!F(null === (e2 = this.instance) || void 0 === e2 ? void 0 : e2._addCaptureHook)) {
      var t2;
      null === (t2 = this.instance) || void 0 === t2 || t2._addCaptureHook((e3, t3) => {
        this.on(e3, t3);
      });
    }
  }
  register(e2) {
    var t2, i2;
    if (!F(null === (t2 = this.instance) || void 0 === t2 ? void 0 : t2._addCaptureHook) && (e2.forEach((e3) => {
      var t3, i3;
      null === (t3 = this.actionRegistry) || void 0 === t3 || t3.add(e3), null === (i3 = e3.steps) || void 0 === i3 || i3.forEach((e4) => {
        var t4;
        null === (t4 = this.actionEvents) || void 0 === t4 || t4.add((null == e4 ? void 0 : e4.event) || "");
      });
    }), null !== (i2 = this.instance) && void 0 !== i2 && i2.autocapture)) {
      var n2, r2 = /* @__PURE__ */ new Set();
      e2.forEach((e3) => {
        var t3;
        null === (t3 = e3.steps) || void 0 === t3 || t3.forEach((e4) => {
          null != e4 && e4.selector && r2.add(null == e4 ? void 0 : e4.selector);
        });
      }), null === (n2 = this.instance) || void 0 === n2 || n2.autocapture.setElementSelectors(r2);
    }
  }
  on(e2, t2) {
    var i2;
    null != t2 && 0 != e2.length && (this.actionEvents.has(e2) || this.actionEvents.has(null == t2 ? void 0 : t2.event)) && this.actionRegistry && (null === (i2 = this.actionRegistry) || void 0 === i2 ? void 0 : i2.size) > 0 && this.actionRegistry.forEach((e3) => {
      this.checkAction(t2, e3) && this._debugEventEmitter.emit("actionCaptured", e3.name);
    });
  }
  _addActionHook(e2) {
    this.onAction("actionCaptured", (t2) => e2(t2));
  }
  checkAction(e2, t2) {
    if (null == (null == t2 ? void 0 : t2.steps)) return false;
    for (var i2 of t2.steps) if (this.checkStep(e2, i2)) return true;
    return false;
  }
  onAction(e2, t2) {
    return this._debugEventEmitter.on(e2, t2);
  }
  checkStepUrl(e2, t2) {
    if (null != t2 && t2.url) {
      var i2, n2 = null == e2 || null === (i2 = e2.properties) || void 0 === i2 ? void 0 : i2.$current_url;
      if (!n2 || "string" != typeof n2) return false;
      if (!_Lr.matchString(n2, null == t2 ? void 0 : t2.url, (null == t2 ? void 0 : t2.url_matching) || "contains")) return false;
    }
    return true;
  }
  static matchString(e2, i2, n2) {
    switch (n2) {
      case "regex":
        return !!t && gt(e2, i2);
      case "exact":
        return i2 === e2;
      case "contains":
        var r2 = _Lr.escapeStringRegexp(i2).replace(/_/g, ".").replace(/%/g, ".*");
        return gt(e2, r2);
      default:
        return false;
    }
  }
  static escapeStringRegexp(e2) {
    return e2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  checkStepElement(e2, t2) {
    if ((null != t2 && t2.href || null != t2 && t2.tag_name || null != t2 && t2.text) && !this.getElementsList(e2).some((e3) => !(null != t2 && t2.href && !_Lr.matchString(e3.href || "", null == t2 ? void 0 : t2.href, (null == t2 ? void 0 : t2.href_matching) || "exact")) && ((null == t2 || !t2.tag_name || e3.tag_name === (null == t2 ? void 0 : t2.tag_name)) && !(null != t2 && t2.text && !_Lr.matchString(e3.text || "", null == t2 ? void 0 : t2.text, (null == t2 ? void 0 : t2.text_matching) || "exact") && !_Lr.matchString(e3.$el_text || "", null == t2 ? void 0 : t2.text, (null == t2 ? void 0 : t2.text_matching) || "exact"))))) return false;
    if (null != t2 && t2.selector) {
      var i2, n2 = null == e2 || null === (i2 = e2.properties) || void 0 === i2 ? void 0 : i2.$element_selectors;
      if (!n2) return false;
      if (!n2.includes(null == t2 ? void 0 : t2.selector)) return false;
    }
    return true;
  }
  getElementsList(e2) {
    return null == (null == e2 ? void 0 : e2.properties.$elements) ? [] : null == e2 ? void 0 : e2.properties.$elements;
  }
};
var Ar = class _Ar {
  constructor(e2) {
    this.instance = e2, this.eventToSurveys = /* @__PURE__ */ new Map(), this.actionToSurveys = /* @__PURE__ */ new Map();
  }
  register(e2) {
    var t2;
    F(null === (t2 = this.instance) || void 0 === t2 ? void 0 : t2._addCaptureHook) || (this.setupEventBasedSurveys(e2), this.setupActionBasedSurveys(e2));
  }
  setupActionBasedSurveys(e2) {
    var t2 = e2.filter((e3) => {
      var t3, i2, n2, r2;
      return (null === (t3 = e3.conditions) || void 0 === t3 ? void 0 : t3.actions) && (null === (i2 = e3.conditions) || void 0 === i2 || null === (n2 = i2.actions) || void 0 === n2 || null === (r2 = n2.values) || void 0 === r2 ? void 0 : r2.length) > 0;
    });
    if (0 !== t2.length) {
      if (null == this.actionMatcher) {
        this.actionMatcher = new Lr(this.instance), this.actionMatcher.init();
        this.actionMatcher._addActionHook((e3) => {
          this.onAction(e3);
        });
      }
      t2.forEach((e3) => {
        var t3, i2, n2, r2, s2, o2, a2, l2, u2, c2;
        e3.conditions && null !== (t3 = e3.conditions) && void 0 !== t3 && t3.actions && null !== (i2 = e3.conditions) && void 0 !== i2 && null !== (n2 = i2.actions) && void 0 !== n2 && n2.values && (null === (r2 = e3.conditions) || void 0 === r2 || null === (s2 = r2.actions) || void 0 === s2 || null === (o2 = s2.values) || void 0 === o2 ? void 0 : o2.length) > 0 && (null === (a2 = this.actionMatcher) || void 0 === a2 || a2.register(e3.conditions.actions.values), null === (l2 = e3.conditions) || void 0 === l2 || null === (u2 = l2.actions) || void 0 === u2 || null === (c2 = u2.values) || void 0 === c2 || c2.forEach((t4) => {
          if (t4 && t4.name) {
            var i3 = this.actionToSurveys.get(t4.name);
            i3 && i3.push(e3.id), this.actionToSurveys.set(t4.name, i3 || [e3.id]);
          }
        }));
      });
    }
  }
  setupEventBasedSurveys(e2) {
    var t2;
    if (0 !== e2.filter((e3) => {
      var t3, i2, n2, r2;
      return (null === (t3 = e3.conditions) || void 0 === t3 ? void 0 : t3.events) && (null === (i2 = e3.conditions) || void 0 === i2 || null === (n2 = i2.events) || void 0 === n2 || null === (r2 = n2.values) || void 0 === r2 ? void 0 : r2.length) > 0;
    }).length) {
      null === (t2 = this.instance) || void 0 === t2 || t2._addCaptureHook((e3, t3) => {
        this.onEvent(e3, t3);
      }), e2.forEach((e3) => {
        var t3, i2, n2;
        null === (t3 = e3.conditions) || void 0 === t3 || null === (i2 = t3.events) || void 0 === i2 || null === (n2 = i2.values) || void 0 === n2 || n2.forEach((t4) => {
          if (t4 && t4.name) {
            var i3 = this.eventToSurveys.get(t4.name);
            i3 && i3.push(e3.id), this.eventToSurveys.set(t4.name, i3 || [e3.id]);
          }
        });
      });
    }
  }
  onEvent(e2, t2) {
    var i2, n2, r2 = (null === (i2 = this.instance) || void 0 === i2 || null === (n2 = i2.persistence) || void 0 === n2 ? void 0 : n2.props[Fe]) || [];
    if (_Ar.SURVEY_SHOWN_EVENT_NAME == e2 && t2 && r2.length > 0) {
      var s2, o2 = null == t2 || null === (s2 = t2.properties) || void 0 === s2 ? void 0 : s2.$survey_id;
      if (o2) {
        var a2 = r2.indexOf(o2);
        a2 >= 0 && (r2.splice(a2, 1), this._updateActivatedSurveys(r2));
      }
    } else this.eventToSurveys.has(e2) && this._updateActivatedSurveys(r2.concat(this.eventToSurveys.get(e2) || []));
  }
  onAction(e2) {
    var t2, i2, n2 = (null === (t2 = this.instance) || void 0 === t2 || null === (i2 = t2.persistence) || void 0 === i2 ? void 0 : i2.props[Fe]) || [];
    this.actionToSurveys.has(e2) && this._updateActivatedSurveys(n2.concat(this.actionToSurveys.get(e2) || []));
  }
  _updateActivatedSurveys(e2) {
    var t2, i2;
    null === (t2 = this.instance) || void 0 === t2 || null === (i2 = t2.persistence) || void 0 === i2 || i2.register({ [Fe]: [...new Set(e2)] });
  }
  getSurveys() {
    var e2, t2, i2 = null === (e2 = this.instance) || void 0 === e2 || null === (t2 = e2.persistence) || void 0 === t2 ? void 0 : t2.props[Fe];
    return i2 || [];
  }
  getEventToSurveys() {
    return this.eventToSurveys;
  }
  _getActionMatcher() {
    return this.actionMatcher;
  }
};
W(Ar, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
var Dr;
var Nr;
var qr;
var Br;
var Hr;
var Ur;
var zr;
var jr;
var Wr = {};
var Vr = [];
var Gr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var Jr = Array.isArray;
function Yr(e2, t2) {
  for (var i2 in t2) e2[i2] = t2[i2];
  return e2;
}
function Kr(e2) {
  var t2 = e2.parentNode;
  t2 && t2.removeChild(e2);
}
function Xr(e2, t2, i2, n2, r2) {
  var s2 = { type: e2, props: t2, key: i2, ref: n2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++qr : r2, __i: -1, __u: 0 };
  return null == r2 && null != Nr.vnode && Nr.vnode(s2), s2;
}
function Qr(e2) {
  return e2.children;
}
function Zr(e2, t2) {
  this.props = e2, this.context = t2;
}
function es(e2, t2) {
  if (null == t2) return e2.__ ? es(e2.__, e2.__i + 1) : null;
  for (var i2; t2 < e2.__k.length; t2++) if (null != (i2 = e2.__k[t2]) && null != i2.__e) return i2.__e;
  return "function" == typeof e2.type ? es(e2) : null;
}
function ts(e2) {
  var t2, i2;
  if (null != (e2 = e2.__) && null != e2.__c) {
    for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++) if (null != (i2 = e2.__k[t2]) && null != i2.__e) {
      e2.__e = e2.__c.base = i2.__e;
      break;
    }
    return ts(e2);
  }
}
function is(e2) {
  (!e2.__d && (e2.__d = true) && Br.push(e2) && !ns.__r++ || Hr !== Nr.debounceRendering) && ((Hr = Nr.debounceRendering) || Ur)(ns);
}
function ns() {
  var e2, t2, i2, n2, r2, s2, o2, a2, l2;
  for (Br.sort(zr); e2 = Br.shift(); ) e2.__d && (t2 = Br.length, n2 = void 0, s2 = (r2 = (i2 = e2).__v).__e, a2 = [], l2 = [], (o2 = i2.__P) && ((n2 = Yr({}, r2)).__v = r2.__v + 1, Nr.vnode && Nr.vnode(n2), hs(o2, n2, r2, i2.__n, void 0 !== o2.ownerSVGElement, 32 & r2.__u ? [s2] : null, a2, null == s2 ? es(r2) : s2, !!(32 & r2.__u), l2), n2.__.__k[n2.__i] = n2, _s(a2, n2, l2), n2.__e != s2 && ts(n2)), Br.length > t2 && Br.sort(zr));
  ns.__r = 0;
}
function rs(e2, t2, i2, n2, r2, s2, o2, a2, l2, u2, c2) {
  var d2, h2, _2, p2, v2, g2 = n2 && n2.__k || Vr, f = t2.length;
  for (i2.__d = l2, ss(i2, t2, g2), l2 = i2.__d, d2 = 0; d2 < f; d2++) null != (_2 = i2.__k[d2]) && "boolean" != typeof _2 && "function" != typeof _2 && (h2 = -1 === _2.__i ? Wr : g2[_2.__i] || Wr, _2.__i = d2, hs(e2, _2, h2, r2, s2, o2, a2, l2, u2, c2), p2 = _2.__e, _2.ref && h2.ref != _2.ref && (h2.ref && vs(h2.ref, null, _2), c2.push(_2.ref, _2.__c || p2, _2)), null == v2 && null != p2 && (v2 = p2), 65536 & _2.__u || h2.__k === _2.__k ? l2 = os(_2, l2, e2) : "function" == typeof _2.type && void 0 !== _2.__d ? l2 = _2.__d : p2 && (l2 = p2.nextSibling), _2.__d = void 0, _2.__u &= -196609);
  i2.__d = l2, i2.__e = v2;
}
function ss(e2, t2, i2) {
  var n2, r2, s2, o2, a2, l2 = t2.length, u2 = i2.length, c2 = u2, d2 = 0;
  for (e2.__k = [], n2 = 0; n2 < l2; n2++) null != (r2 = e2.__k[n2] = null == (r2 = t2[n2]) || "boolean" == typeof r2 || "function" == typeof r2 ? null : "string" == typeof r2 || "number" == typeof r2 || "bigint" == typeof r2 || r2.constructor == String ? Xr(null, r2, null, null, r2) : Jr(r2) ? Xr(Qr, { children: r2 }, null, null, null) : void 0 === r2.constructor && r2.__b > 0 ? Xr(r2.type, r2.props, r2.key, r2.ref ? r2.ref : null, r2.__v) : r2) ? (r2.__ = e2, r2.__b = e2.__b + 1, a2 = as(r2, i2, o2 = n2 + d2, c2), r2.__i = a2, s2 = null, -1 !== a2 && (c2--, (s2 = i2[a2]) && (s2.__u |= 131072)), null == s2 || null === s2.__v ? (-1 == a2 && d2--, "function" != typeof r2.type && (r2.__u |= 65536)) : a2 !== o2 && (a2 === o2 + 1 ? d2++ : a2 > o2 ? c2 > l2 - o2 ? d2 += a2 - o2 : d2-- : d2 = a2 < o2 && a2 == o2 - 1 ? a2 - o2 : 0, a2 !== n2 + d2 && (r2.__u |= 65536))) : (s2 = i2[n2]) && null == s2.key && s2.__e && (s2.__e == e2.__d && (e2.__d = es(s2)), gs(s2, s2, false), i2[n2] = null, c2--);
  if (c2) for (n2 = 0; n2 < u2; n2++) null != (s2 = i2[n2]) && 0 == (131072 & s2.__u) && (s2.__e == e2.__d && (e2.__d = es(s2)), gs(s2, s2));
}
function os(e2, t2, i2) {
  var n2, r2;
  if ("function" == typeof e2.type) {
    for (n2 = e2.__k, r2 = 0; n2 && r2 < n2.length; r2++) n2[r2] && (n2[r2].__ = e2, t2 = os(n2[r2], t2, i2));
    return t2;
  }
  return e2.__e != t2 && (i2.insertBefore(e2.__e, t2 || null), t2 = e2.__e), t2 && t2.nextSibling;
}
function as(e2, t2, i2, n2) {
  var r2 = e2.key, s2 = e2.type, o2 = i2 - 1, a2 = i2 + 1, l2 = t2[i2];
  if (null === l2 || l2 && r2 == l2.key && s2 === l2.type) return i2;
  if (n2 > (null != l2 && 0 == (131072 & l2.__u) ? 1 : 0)) for (; o2 >= 0 || a2 < t2.length; ) {
    if (o2 >= 0) {
      if ((l2 = t2[o2]) && 0 == (131072 & l2.__u) && r2 == l2.key && s2 === l2.type) return o2;
      o2--;
    }
    if (a2 < t2.length) {
      if ((l2 = t2[a2]) && 0 == (131072 & l2.__u) && r2 == l2.key && s2 === l2.type) return a2;
      a2++;
    }
  }
  return -1;
}
function ls(e2, t2, i2) {
  "-" === t2[0] ? e2.setProperty(t2, null == i2 ? "" : i2) : e2[t2] = null == i2 ? "" : "number" != typeof i2 || Gr.test(t2) ? i2 : i2 + "px";
}
function us(e2, t2, i2, n2, r2) {
  var s2;
  e: if ("style" === t2) if ("string" == typeof i2) e2.style.cssText = i2;
  else {
    if ("string" == typeof n2 && (e2.style.cssText = n2 = ""), n2) for (t2 in n2) i2 && t2 in i2 || ls(e2.style, t2, "");
    if (i2) for (t2 in i2) n2 && i2[t2] === n2[t2] || ls(e2.style, t2, i2[t2]);
  }
  else if ("o" === t2[0] && "n" === t2[1]) s2 = t2 !== (t2 = t2.replace(/(PointerCapture)$|Capture$/, "$1")), t2 = t2.toLowerCase() in e2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + s2] = i2, i2 ? n2 ? i2.u = n2.u : (i2.u = Date.now(), e2.addEventListener(t2, s2 ? ds : cs, s2)) : e2.removeEventListener(t2, s2 ? ds : cs, s2);
  else {
    if (r2) t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" !== t2 && "height" !== t2 && "href" !== t2 && "list" !== t2 && "form" !== t2 && "tabIndex" !== t2 && "download" !== t2 && "rowSpan" !== t2 && "colSpan" !== t2 && "role" !== t2 && t2 in e2) try {
      e2[t2] = null == i2 ? "" : i2;
      break e;
    } catch (e3) {
    }
    "function" == typeof i2 || (null == i2 || false === i2 && "-" !== t2[4] ? e2.removeAttribute(t2) : e2.setAttribute(t2, i2));
  }
}
function cs(e2) {
  var t2 = this.l[e2.type + false];
  if (e2.t) {
    if (e2.t <= t2.u) return;
  } else e2.t = Date.now();
  return t2(Nr.event ? Nr.event(e2) : e2);
}
function ds(e2) {
  return this.l[e2.type + true](Nr.event ? Nr.event(e2) : e2);
}
function hs(e2, t2, i2, n2, r2, s2, o2, a2, l2, u2) {
  var c2, d2, h2, _2, p2, v2, g2, f, m2, b2, y2, w2, S2, E2, k2, x2 = t2.type;
  if (void 0 !== t2.constructor) return null;
  128 & i2.__u && (l2 = !!(32 & i2.__u), s2 = [a2 = t2.__e = i2.__e]), (c2 = Nr.__b) && c2(t2);
  e: if ("function" == typeof x2) try {
    if (f = t2.props, m2 = (c2 = x2.contextType) && n2[c2.__c], b2 = c2 ? m2 ? m2.props.value : c2.__ : n2, i2.__c ? g2 = (d2 = t2.__c = i2.__c).__ = d2.__E : ("prototype" in x2 && x2.prototype.render ? t2.__c = d2 = new x2(f, b2) : (t2.__c = d2 = new Zr(f, b2), d2.constructor = x2, d2.render = fs), m2 && m2.sub(d2), d2.props = f, d2.state || (d2.state = {}), d2.context = b2, d2.__n = n2, h2 = d2.__d = true, d2.__h = [], d2._sb = []), null == d2.__s && (d2.__s = d2.state), null != x2.getDerivedStateFromProps && (d2.__s == d2.state && (d2.__s = Yr({}, d2.__s)), Yr(d2.__s, x2.getDerivedStateFromProps(f, d2.__s))), _2 = d2.props, p2 = d2.state, d2.__v = t2, h2) null == x2.getDerivedStateFromProps && null != d2.componentWillMount && d2.componentWillMount(), null != d2.componentDidMount && d2.__h.push(d2.componentDidMount);
    else {
      if (null == x2.getDerivedStateFromProps && f !== _2 && null != d2.componentWillReceiveProps && d2.componentWillReceiveProps(f, b2), !d2.__e && (null != d2.shouldComponentUpdate && false === d2.shouldComponentUpdate(f, d2.__s, b2) || t2.__v === i2.__v)) {
        for (t2.__v !== i2.__v && (d2.props = f, d2.state = d2.__s, d2.__d = false), t2.__e = i2.__e, t2.__k = i2.__k, t2.__k.forEach(function(e3) {
          e3 && (e3.__ = t2);
        }), y2 = 0; y2 < d2._sb.length; y2++) d2.__h.push(d2._sb[y2]);
        d2._sb = [], d2.__h.length && o2.push(d2);
        break e;
      }
      null != d2.componentWillUpdate && d2.componentWillUpdate(f, d2.__s, b2), null != d2.componentDidUpdate && d2.__h.push(function() {
        d2.componentDidUpdate(_2, p2, v2);
      });
    }
    if (d2.context = b2, d2.props = f, d2.__P = e2, d2.__e = false, w2 = Nr.__r, S2 = 0, "prototype" in x2 && x2.prototype.render) {
      for (d2.state = d2.__s, d2.__d = false, w2 && w2(t2), c2 = d2.render(d2.props, d2.state, d2.context), E2 = 0; E2 < d2._sb.length; E2++) d2.__h.push(d2._sb[E2]);
      d2._sb = [];
    } else do {
      d2.__d = false, w2 && w2(t2), c2 = d2.render(d2.props, d2.state, d2.context), d2.state = d2.__s;
    } while (d2.__d && ++S2 < 25);
    d2.state = d2.__s, null != d2.getChildContext && (n2 = Yr(Yr({}, n2), d2.getChildContext())), h2 || null == d2.getSnapshotBeforeUpdate || (v2 = d2.getSnapshotBeforeUpdate(_2, p2)), rs(e2, Jr(k2 = null != c2 && c2.type === Qr && null == c2.key ? c2.props.children : c2) ? k2 : [k2], t2, i2, n2, r2, s2, o2, a2, l2, u2), d2.base = t2.__e, t2.__u &= -161, d2.__h.length && o2.push(d2), g2 && (d2.__E = d2.__ = null);
  } catch (e3) {
    t2.__v = null, l2 || null != s2 ? (t2.__e = a2, t2.__u |= l2 ? 160 : 32, s2[s2.indexOf(a2)] = null) : (t2.__e = i2.__e, t2.__k = i2.__k), Nr.__e(e3, t2, i2);
  }
  else null == s2 && t2.__v === i2.__v ? (t2.__k = i2.__k, t2.__e = i2.__e) : t2.__e = ps(i2.__e, t2, i2, n2, r2, s2, o2, l2, u2);
  (c2 = Nr.diffed) && c2(t2);
}
function _s(e2, t2, i2) {
  t2.__d = void 0;
  for (var n2 = 0; n2 < i2.length; n2++) vs(i2[n2], i2[++n2], i2[++n2]);
  Nr.__c && Nr.__c(t2, e2), e2.some(function(t3) {
    try {
      e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
        e3.call(t3);
      });
    } catch (e3) {
      Nr.__e(e3, t3.__v);
    }
  });
}
function ps(e2, t2, i2, n2, r2, s2, o2, a2, l2) {
  var u2, c2, d2, h2, _2, p2, v2, g2 = i2.props, f = t2.props, m2 = t2.type;
  if ("svg" === m2 && (r2 = true), null != s2) {
    for (u2 = 0; u2 < s2.length; u2++) if ((_2 = s2[u2]) && "setAttribute" in _2 == !!m2 && (m2 ? _2.localName === m2 : 3 === _2.nodeType)) {
      e2 = _2, s2[u2] = null;
      break;
    }
  }
  if (null == e2) {
    if (null === m2) return document.createTextNode(f);
    e2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", m2) : document.createElement(m2, f.is && f), s2 = null, a2 = false;
  }
  if (null === m2) g2 === f || a2 && e2.data === f || (e2.data = f);
  else {
    if (s2 = s2 && Dr.call(e2.childNodes), g2 = i2.props || Wr, !a2 && null != s2) for (g2 = {}, u2 = 0; u2 < e2.attributes.length; u2++) g2[(_2 = e2.attributes[u2]).name] = _2.value;
    for (u2 in g2) _2 = g2[u2], "children" == u2 || ("dangerouslySetInnerHTML" == u2 ? d2 = _2 : "key" === u2 || u2 in f || us(e2, u2, null, _2, r2));
    for (u2 in f) _2 = f[u2], "children" == u2 ? h2 = _2 : "dangerouslySetInnerHTML" == u2 ? c2 = _2 : "value" == u2 ? p2 = _2 : "checked" == u2 ? v2 = _2 : "key" === u2 || a2 && "function" != typeof _2 || g2[u2] === _2 || us(e2, u2, _2, g2[u2], r2);
    if (c2) a2 || d2 && (c2.__html === d2.__html || c2.__html === e2.innerHTML) || (e2.innerHTML = c2.__html), t2.__k = [];
    else if (d2 && (e2.innerHTML = ""), rs(e2, Jr(h2) ? h2 : [h2], t2, i2, n2, r2 && "foreignObject" !== m2, s2, o2, s2 ? s2[0] : i2.__k && es(i2, 0), a2, l2), null != s2) for (u2 = s2.length; u2--; ) null != s2[u2] && Kr(s2[u2]);
    a2 || (u2 = "value", void 0 !== p2 && (p2 !== e2[u2] || "progress" === m2 && !p2 || "option" === m2 && p2 !== g2[u2]) && us(e2, u2, p2, g2[u2], false), u2 = "checked", void 0 !== v2 && v2 !== e2[u2] && us(e2, u2, v2, g2[u2], false));
  }
  return e2;
}
function vs(e2, t2, i2) {
  try {
    "function" == typeof e2 ? e2(t2) : e2.current = t2;
  } catch (e3) {
    Nr.__e(e3, i2);
  }
}
function gs(e2, t2, i2) {
  var n2, r2;
  if (Nr.unmount && Nr.unmount(e2), (n2 = e2.ref) && (n2.current && n2.current !== e2.__e || vs(n2, null, t2)), null != (n2 = e2.__c)) {
    if (n2.componentWillUnmount) try {
      n2.componentWillUnmount();
    } catch (e3) {
      Nr.__e(e3, t2);
    }
    n2.base = n2.__P = null, e2.__c = void 0;
  }
  if (n2 = e2.__k) for (r2 = 0; r2 < n2.length; r2++) n2[r2] && gs(n2[r2], t2, i2 || "function" != typeof e2.type);
  i2 || null == e2.__e || Kr(e2.__e), e2.__ = e2.__e = e2.__d = void 0;
}
function fs(e2, t2, i2) {
  return this.constructor(e2, i2);
}
Dr = Vr.slice, Nr = { __e: function(e2, t2, i2, n2) {
  for (var r2, s2, o2; t2 = t2.__; ) if ((r2 = t2.__c) && !r2.__) try {
    if ((s2 = r2.constructor) && null != s2.getDerivedStateFromError && (r2.setState(s2.getDerivedStateFromError(e2)), o2 = r2.__d), null != r2.componentDidCatch && (r2.componentDidCatch(e2, n2 || {}), o2 = r2.__d), o2) return r2.__E = r2;
  } catch (t3) {
    e2 = t3;
  }
  throw e2;
} }, qr = 0, Zr.prototype.setState = function(e2, t2) {
  var i2;
  i2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Yr({}, this.state), "function" == typeof e2 && (e2 = e2(Yr({}, i2), this.props)), e2 && Yr(i2, e2), null != e2 && this.__v && (t2 && this._sb.push(t2), is(this));
}, Zr.prototype.forceUpdate = function(e2) {
  this.__v && (this.__e = true, e2 && this.__h.push(e2), is(this));
}, Zr.prototype.render = Qr, Br = [], Ur = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, zr = function(e2, t2) {
  return e2.__v.__b - t2.__v.__b;
}, ns.__r = 0, jr = 0;
!function(e2, t2) {
  var i2 = { __c: t2 = "__cC" + jr++, __: e2, Consumer: function(e3, t3) {
    return e3.children(t3);
  }, Provider: function(e3) {
    var i3, n2;
    return this.getChildContext || (i3 = [], (n2 = {})[t2] = this, this.getChildContext = function() {
      return n2;
    }, this.shouldComponentUpdate = function(e4) {
      this.props.value !== e4.value && i3.some(function(e5) {
        e5.__e = true, is(e5);
      });
    }, this.sub = function(e4) {
      i3.push(e4);
      var t3 = e4.componentWillUnmount;
      e4.componentWillUnmount = function() {
        i3.splice(i3.indexOf(e4), 1), t3 && t3.call(e4);
      };
    }), e3.children;
  } };
  i2.Provider.__ = i2.Consumer.contextType = i2;
}({ isPreviewMode: false, previewPageIndex: 0, handleCloseSurveyPopup: () => {
}, isPopup: true });
var ms = B("[Surveys]");
var bs = { icontains: (e2) => !!t && t.location.href.toLowerCase().indexOf(e2.toLowerCase()) > -1, not_icontains: (e2) => !!t && -1 === t.location.href.toLowerCase().indexOf(e2.toLowerCase()), regex: (e2) => !!t && gt(t.location.href, e2), not_regex: (e2) => !!t && !gt(t.location.href, e2), exact: (e2) => (null == t ? void 0 : t.location.href) === e2, is_not: (e2) => (null == t ? void 0 : t.location.href) !== e2 };
var ys = class {
  constructor(e2) {
    this.instance = e2, this._surveyEventReceiver = null;
  }
  onRemoteConfig(e2) {
    this._decideServerResponse = !!e2.surveys, this.loadIfEnabled();
  }
  reset() {
    localStorage.removeItem("lastSeenSurveyDate");
    var e2 = (() => {
      for (var e3 = [], t2 = 0; t2 < localStorage.length; t2++) {
        var i2 = localStorage.key(t2);
        null != i2 && i2.startsWith("seenSurvey_") && e3.push(i2);
      }
      return e3;
    })();
    e2.forEach((e3) => localStorage.removeItem(e3));
  }
  loadIfEnabled() {
    var e2, t2, i2, n2 = null == _ || null === (e2 = _.__PosthogExtensions__) || void 0 === e2 ? void 0 : e2.generateSurveys;
    this.instance.config.disable_surveys || !this._decideServerResponse || n2 || (null == this._surveyEventReceiver && (this._surveyEventReceiver = new Ar(this.instance)), null === (t2 = _.__PosthogExtensions__) || void 0 === t2 || null === (i2 = t2.loadExternalDependency) || void 0 === i2 || i2.call(t2, this.instance, "surveys", (e3) => {
      var t3, i3;
      if (e3) return ms.error("Could not load surveys script", e3);
      this._surveyManager = null === (t3 = _.__PosthogExtensions__) || void 0 === t3 || null === (i3 = t3.generateSurveys) || void 0 === i3 ? void 0 : i3.call(t3, this.instance);
    }));
  }
  getSurveys(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this.instance.config.disable_surveys) return e2([]);
    null == this._surveyEventReceiver && (this._surveyEventReceiver = new Ar(this.instance));
    var i2 = this.instance.get_property(Pe);
    if (i2 && !t2) return e2(i2);
    this.instance._send_request({ url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)), method: "GET", callback: (t3) => {
      var i3;
      if (200 !== t3.statusCode || !t3.json) return e2([]);
      var n2, r2 = t3.json.surveys || [], s2 = r2.filter((e3) => {
        var t4, i4, n3, r3, s3, o2, a2, l2, u2, c2, d2, h2;
        return (null === (t4 = e3.conditions) || void 0 === t4 ? void 0 : t4.events) && (null === (i4 = e3.conditions) || void 0 === i4 || null === (n3 = i4.events) || void 0 === n3 ? void 0 : n3.values) && (null === (r3 = e3.conditions) || void 0 === r3 || null === (s3 = r3.events) || void 0 === s3 || null === (o2 = s3.values) || void 0 === o2 ? void 0 : o2.length) > 0 || (null === (a2 = e3.conditions) || void 0 === a2 ? void 0 : a2.actions) && (null === (l2 = e3.conditions) || void 0 === l2 || null === (u2 = l2.actions) || void 0 === u2 ? void 0 : u2.values) && (null === (c2 = e3.conditions) || void 0 === c2 || null === (d2 = c2.actions) || void 0 === d2 || null === (h2 = d2.values) || void 0 === h2 ? void 0 : h2.length) > 0;
      });
      s2.length > 0 && (null === (n2 = this._surveyEventReceiver) || void 0 === n2 || n2.register(s2));
      return null === (i3 = this.instance.persistence) || void 0 === i3 || i3.register({ [Pe]: r2 }), e2(r2);
    } });
  }
  getActiveMatchingSurveys(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.getSurveys((t3) => {
      var i2, n2 = t3.filter((e3) => !(!e3.start_date || e3.end_date)).filter((e3) => {
        var t4, i3, n3, r3;
        if (!e3.conditions) return true;
        var s3 = null === (t4 = e3.conditions) || void 0 === t4 || !t4.url || bs[null !== (i3 = null === (n3 = e3.conditions) || void 0 === n3 ? void 0 : n3.urlMatchType) && void 0 !== i3 ? i3 : "icontains"](e3.conditions.url), o2 = null === (r3 = e3.conditions) || void 0 === r3 || !r3.selector || (null == a ? void 0 : a.querySelector(e3.conditions.selector));
        return s3 && o2;
      }), r2 = null === (i2 = this._surveyEventReceiver) || void 0 === i2 ? void 0 : i2.getSurveys(), s2 = n2.filter((e3) => {
        var t4, i3, n3, s3, o2, a2, l2, u2, c2, d2, h2;
        if (!(e3.linked_flag_key || e3.targeting_flag_key || e3.internal_targeting_flag_key || null !== (t4 = e3.feature_flag_keys) && void 0 !== t4 && t4.length)) return true;
        var _2 = !e3.linked_flag_key || this.instance.featureFlags.isFeatureEnabled(e3.linked_flag_key), p2 = !e3.targeting_flag_key || this.instance.featureFlags.isFeatureEnabled(e3.targeting_flag_key), v2 = (null === (i3 = e3.conditions) || void 0 === i3 ? void 0 : i3.events) && (null === (n3 = e3.conditions) || void 0 === n3 || null === (s3 = n3.events) || void 0 === s3 ? void 0 : s3.values) && (null === (o2 = e3.conditions) || void 0 === o2 || null === (a2 = o2.events) || void 0 === a2 ? void 0 : a2.values.length) > 0, g2 = (null === (l2 = e3.conditions) || void 0 === l2 ? void 0 : l2.actions) && (null === (u2 = e3.conditions) || void 0 === u2 || null === (c2 = u2.actions) || void 0 === c2 ? void 0 : c2.values) && (null === (d2 = e3.conditions) || void 0 === d2 || null === (h2 = d2.actions) || void 0 === h2 ? void 0 : h2.values.length) > 0, f = !v2 && !g2 || (null == r2 ? void 0 : r2.includes(e3.id)), m2 = this._canActivateRepeatedly(e3), b2 = !(e3.internal_targeting_flag_key && !m2) || this.instance.featureFlags.isFeatureEnabled(e3.internal_targeting_flag_key), y2 = this.checkFlags(e3);
        return _2 && p2 && b2 && f && y2;
      });
      return e2(s2);
    }, t2);
  }
  checkFlags(e2) {
    var t2;
    return null === (t2 = e2.feature_flag_keys) || void 0 === t2 || !t2.length || e2.feature_flag_keys.every((e3) => {
      var { key: t3, value: i2 } = e3;
      return !t3 || !i2 || this.instance.featureFlags.isFeatureEnabled(i2);
    });
  }
  getNextSurveyStep(e2, t2, i2) {
    var n2, r2 = e2.questions[t2], s2 = t2 + 1;
    if (null === (n2 = r2.branching) || void 0 === n2 || !n2.type) return t2 === e2.questions.length - 1 ? Rr.End : s2;
    if (r2.branching.type === Rr.End) return Rr.End;
    if (r2.branching.type === Rr.SpecificQuestion) {
      if (Number.isInteger(r2.branching.index)) return r2.branching.index;
    } else if (r2.branching.type === Rr.ResponseBased) {
      if (r2.type === Fr.SingleChoice) {
        var o2, a2, l2 = r2.choices.indexOf("".concat(i2));
        if (null !== (o2 = r2.branching) && void 0 !== o2 && null !== (a2 = o2.responseValues) && void 0 !== a2 && a2.hasOwnProperty(l2)) {
          var u2 = r2.branching.responseValues[l2];
          return Number.isInteger(u2) ? u2 : u2 === Rr.End ? Rr.End : s2;
        }
      } else if (r2.type === Fr.Rating) {
        var c2, d2;
        if ("number" != typeof i2 || !Number.isInteger(i2)) throw new Error("The response type must be an integer");
        var h2 = function(e3, t3) {
          if (3 === t3) {
            if (e3 < 1 || e3 > 3) throw new Error("The response must be in range 1-3");
            return 1 === e3 ? "negative" : 2 === e3 ? "neutral" : "positive";
          }
          if (5 === t3) {
            if (e3 < 1 || e3 > 5) throw new Error("The response must be in range 1-5");
            return e3 <= 2 ? "negative" : 3 === e3 ? "neutral" : "positive";
          }
          if (7 === t3) {
            if (e3 < 1 || e3 > 7) throw new Error("The response must be in range 1-7");
            return e3 <= 3 ? "negative" : 4 === e3 ? "neutral" : "positive";
          }
          if (10 === t3) {
            if (e3 < 0 || e3 > 10) throw new Error("The response must be in range 0-10");
            return e3 <= 6 ? "detractors" : e3 <= 8 ? "passives" : "promoters";
          }
          throw new Error("The scale must be one of: 3, 5, 7, 10");
        }(i2, r2.scale);
        if (null !== (c2 = r2.branching) && void 0 !== c2 && null !== (d2 = c2.responseValues) && void 0 !== d2 && d2.hasOwnProperty(h2)) {
          var _2 = r2.branching.responseValues[h2];
          return Number.isInteger(_2) ? _2 : _2 === Rr.End ? Rr.End : s2;
        }
      }
      return s2;
    }
    return ms.warn("Falling back to next question index due to unexpected branching type"), s2;
  }
  _canActivateRepeatedly(e2) {
    var t2;
    return O(null === (t2 = _.__PosthogExtensions__) || void 0 === t2 ? void 0 : t2.canActivateRepeatedly) ? (ms.warn("init was not called"), false) : _.__PosthogExtensions__.canActivateRepeatedly(e2);
  }
  canRenderSurvey(e2) {
    O(this._surveyManager) ? ms.warn("init was not called") : this.getSurveys((t2) => {
      var i2 = t2.filter((t3) => t3.id === e2)[0];
      this._surveyManager.canRenderSurvey(i2);
    });
  }
  renderSurvey(e2, t2) {
    O(this._surveyManager) ? ms.warn("init was not called") : this.getSurveys((i2) => {
      var n2 = i2.filter((t3) => t3.id === e2)[0];
      this._surveyManager.renderSurvey(n2, null == a ? void 0 : a.querySelector(t2));
    });
  }
};
var ws = B("[RateLimiter]");
var Ss = class {
  constructor(e2) {
    var t2, i2;
    W(this, "serverLimits", {}), W(this, "lastEventRateLimited", false), W(this, "checkForLimiting", (e3) => {
      var t3 = e3.text;
      if (t3 && t3.length) try {
        (JSON.parse(t3).quota_limited || []).forEach((e4) => {
          ws.info("".concat(e4 || "events", " is quota limited.")), this.serverLimits[e4] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
        });
      } catch (e4) {
        return void ws.warn('could not rate limit - continuing. Error: "'.concat(null == e4 ? void 0 : e4.message, '"'), { text: t3 });
      }
    }), this.instance = e2, this.captureEventsPerSecond = (null === (t2 = e2.config.rate_limiting) || void 0 === t2 ? void 0 : t2.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null === (i2 = e2.config.rate_limiting) || void 0 === i2 ? void 0 : i2.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(true).isRateLimited;
  }
  clientRateLimitContext() {
    var e2, t2, i2, n2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], r2 = (/* @__PURE__ */ new Date()).getTime(), s2 = null !== (e2 = null === (t2 = this.instance.persistence) || void 0 === t2 ? void 0 : t2.get_property(Oe)) && void 0 !== e2 ? e2 : { tokens: this.captureEventsBurstLimit, last: r2 };
    s2.tokens += (r2 - s2.last) / 1e3 * this.captureEventsPerSecond, s2.last = r2, s2.tokens > this.captureEventsBurstLimit && (s2.tokens = this.captureEventsBurstLimit);
    var o2 = s2.tokens < 1;
    return o2 || n2 || (s2.tokens = Math.max(0, s2.tokens - 1)), !o2 || this.lastEventRateLimited || n2 || this.instance.capture("$$client_ingestion_warning", { $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.") }, { skip_client_rate_limiting: true }), this.lastEventRateLimited = o2, null === (i2 = this.instance.persistence) || void 0 === i2 || i2.set_property(Oe, s2), { isRateLimited: o2, remainingTokens: s2.tokens };
  }
  isServerRateLimited(e2) {
    var t2 = this.serverLimits[e2 || "events"] || false;
    return false !== t2 && (/* @__PURE__ */ new Date()).getTime() < t2;
  }
};
var Es = () => j({ initialPathName: (null == l ? void 0 : l.pathname) || "", referringDomain: fi.referringDomain() }, fi.campaignParams());
var ks = class {
  constructor(e2, t2, i2) {
    W(this, "_onSessionIdCallback", (e3) => {
      var t3 = this._getStoredProps();
      if (!t3 || t3.sessionId !== e3) {
        var i3 = { sessionId: e3, props: this._sessionSourceParamGenerator() };
        this._persistence.register({ [$e]: i3 });
      }
    }), this._sessionIdManager = e2, this._persistence = t2, this._sessionSourceParamGenerator = i2 || Es, this._sessionIdManager.onSessionId(this._onSessionIdCallback);
  }
  _getStoredProps() {
    return this._persistence.props[$e];
  }
  getSessionProps() {
    var e2, t2 = null === (e2 = this._getStoredProps()) || void 0 === e2 ? void 0 : e2.props;
    return t2 ? { $client_session_initial_referring_host: t2.referringDomain, $client_session_initial_pathname: t2.initialPathName, $client_session_initial_utm_source: t2.utm_source, $client_session_initial_utm_campaign: t2.utm_campaign, $client_session_initial_utm_medium: t2.utm_medium, $client_session_initial_utm_content: t2.utm_content, $client_session_initial_utm_term: t2.utm_term } : {};
  }
};
var xs = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "headlesschrome", "cypress", "Google-HotelAdsVerifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;"];
var Is = function(e2, t2) {
  if (!e2) return false;
  var i2 = e2.toLowerCase();
  return xs.concat(t2 || []).some((e3) => {
    var t3 = e3.toLowerCase();
    return -1 !== i2.indexOf(t3);
  });
};
var Cs = function(e2, t2) {
  if (!e2) return false;
  var i2 = e2.userAgent;
  if (i2 && Is(i2, t2)) return true;
  try {
    var n2 = null == e2 ? void 0 : e2.userAgentData;
    if (null != n2 && n2.brands && n2.brands.some((e3) => Is(null == e3 ? void 0 : e3.brand, t2))) return true;
  } catch (e3) {
  }
  return !!e2.webdriver;
};
var Ps = class {
  constructor() {
    this.clicks = [];
  }
  isRageClick(e2, t2, i2) {
    var n2 = this.clicks[this.clicks.length - 1];
    if (n2 && Math.abs(e2 - n2.x) + Math.abs(t2 - n2.y) < 30 && i2 - n2.timestamp < 1e3) {
      if (this.clicks.push({ x: e2, y: t2, timestamp: i2 }), 3 === this.clicks.length) return true;
    } else this.clicks = [{ x: e2, y: t2, timestamp: i2 }];
    return false;
  }
};
var Fs = B("[Dead Clicks]");
var Rs = () => true;
var Ts = (e2) => {
  var t2, i2 = !(null === (t2 = e2.instance.persistence) || void 0 === t2 || !t2.get_property(de)), n2 = e2.instance.config.capture_dead_clicks;
  return L(n2) ? n2 : i2;
};
var $s = class {
  get lazyLoadedDeadClicksAutocapture() {
    return this._lazyLoadedDeadClicksAutocapture;
  }
  constructor(e2, t2, i2) {
    this.instance = e2, this.isEnabled = t2, this.onCapture = i2, this.startIfEnabled();
  }
  onRemoteConfig(e2) {
    this.instance.persistence && this.instance.persistence.register({ [de]: null == e2 ? void 0 : e2.captureDeadClicks }), this.startIfEnabled();
  }
  startIfEnabled() {
    this.isEnabled(this) && this.loadScript(() => {
      this.start();
    });
  }
  loadScript(e2) {
    var t2, i2, n2;
    null !== (t2 = _.__PosthogExtensions__) && void 0 !== t2 && t2.initDeadClicksAutocapture && e2(), null === (i2 = _.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.loadExternalDependency) || void 0 === n2 || n2.call(i2, this.instance, "dead-clicks-autocapture", (t3) => {
      t3 ? Fs.error("failed to load script", t3) : e2();
    });
  }
  start() {
    var e2;
    if (a) {
      if (!this._lazyLoadedDeadClicksAutocapture && null !== (e2 = _.__PosthogExtensions__) && void 0 !== e2 && e2.initDeadClicksAutocapture) {
        var t2 = C(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
        t2.__onCapture = this.onCapture, this._lazyLoadedDeadClicksAutocapture = _.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t2), this._lazyLoadedDeadClicksAutocapture.start(a), Fs.info("starting...");
      }
    } else Fs.error("`document` not found. Cannot start.");
  }
  stop() {
    this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, Fs.info("stopping..."));
  }
};
var Os = B("[Heatmaps]");
function Ms(e2) {
  return C(e2) && "clientX" in e2 && "clientY" in e2 && M(e2.clientX) && M(e2.clientY);
}
var Ls = class {
  constructor(e2) {
    var i2;
    W(this, "rageclicks", new Ps()), W(this, "_enabledServerSide", false), W(this, "_initialized", false), W(this, "_flushInterval", null), this.instance = e2, this._enabledServerSide = !(null === (i2 = this.instance.persistence) || void 0 === i2 || !i2.props[le]), null == t || t.addEventListener("beforeunload", () => {
      this.flush();
    });
  }
  get flushIntervalMilliseconds() {
    var e2 = 5e3;
    return C(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e2 = this.instance.config.capture_heatmaps.flush_interval_milliseconds), e2;
  }
  get isEnabled() {
    return F(this.instance.config.capture_heatmaps) ? F(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : false !== this.instance.config.capture_heatmaps;
  }
  startIfEnabled() {
    if (this.isEnabled) {
      if (this._initialized) return;
      Os.info("starting..."), this._setupListeners(), this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds);
    } else {
      var e2, t2;
      clearInterval(null !== (e2 = this._flushInterval) && void 0 !== e2 ? e2 : void 0), null === (t2 = this.deadClicksCapture) || void 0 === t2 || t2.stop(), this.getAndClearBuffer();
    }
  }
  onRemoteConfig(e2) {
    var t2 = !!e2.heatmaps;
    this.instance.persistence && this.instance.persistence.register({ [le]: t2 }), this._enabledServerSide = t2, this.startIfEnabled();
  }
  getAndClearBuffer() {
    var e2 = this.buffer;
    return this.buffer = void 0, e2;
  }
  _onDeadClick(e2) {
    this._onClick(e2.originalEvent, "deadclick");
  }
  _setupListeners() {
    t && a && (ie(a, "click", (e2) => this._onClick(e2 || (null == t ? void 0 : t.event)), false, true), ie(a, "mousemove", (e2) => this._onMouseMove(e2 || (null == t ? void 0 : t.event)), false, true), this.deadClicksCapture = new $s(this.instance, Rs, this._onDeadClick.bind(this)), this.deadClicksCapture.startIfEnabled(), this._initialized = true);
  }
  _getProperties(e2, i2) {
    var n2 = this.instance.scrollManager.scrollY(), r2 = this.instance.scrollManager.scrollX(), s2 = this.instance.scrollManager.scrollElement(), o2 = function(e3, i3, n3) {
      for (var r3 = e3; r3 && xi(r3) && !Ii(r3, "body"); ) {
        if (r3 === n3) return false;
        if (m(i3, null == t ? void 0 : t.getComputedStyle(r3).position)) return true;
        r3 = Ai(r3);
      }
      return false;
    }(Mi(e2), ["fixed", "sticky"], s2);
    return { x: e2.clientX + (o2 ? 0 : r2), y: e2.clientY + (o2 ? 0 : n2), target_fixed: o2, type: i2 };
  }
  _onClick(e2) {
    var t2, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
    if (!ki(e2.target) && Ms(e2)) {
      var n2 = this._getProperties(e2, i2);
      null !== (t2 = this.rageclicks) && void 0 !== t2 && t2.isRageClick(e2.clientX, e2.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._capture(j(j({}, n2), {}, { type: "rageclick" })), this._capture(n2);
    }
  }
  _onMouseMove(e2) {
    !ki(e2.target) && Ms(e2) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(() => {
      this._capture(this._getProperties(e2, "mousemove"));
    }, 500));
  }
  _capture(e2) {
    if (t) {
      var i2 = t.location.href;
      this.buffer = this.buffer || {}, this.buffer[i2] || (this.buffer[i2] = []), this.buffer[i2].push(e2);
    }
  }
  flush() {
    this.buffer && !P(this.buffer) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
  }
};
var As = class {
  constructor(e2) {
    W(this, "_updateScrollData", () => {
      var e3, t2, i2, n2;
      this.context || (this.context = {});
      var r2 = this.scrollElement(), s2 = this.scrollY(), o2 = r2 ? Math.max(0, r2.scrollHeight - r2.clientHeight) : 0, a2 = s2 + ((null == r2 ? void 0 : r2.clientHeight) || 0), l2 = (null == r2 ? void 0 : r2.scrollHeight) || 0;
      this.context.lastScrollY = Math.ceil(s2), this.context.maxScrollY = Math.max(s2, null !== (e3 = this.context.maxScrollY) && void 0 !== e3 ? e3 : 0), this.context.maxScrollHeight = Math.max(o2, null !== (t2 = this.context.maxScrollHeight) && void 0 !== t2 ? t2 : 0), this.context.lastContentY = a2, this.context.maxContentY = Math.max(a2, null !== (i2 = this.context.maxContentY) && void 0 !== i2 ? i2 : 0), this.context.maxContentHeight = Math.max(l2, null !== (n2 = this.context.maxContentHeight) && void 0 !== n2 ? n2 : 0);
    }), this.instance = e2;
  }
  getContext() {
    return this.context;
  }
  resetContext() {
    var e2 = this.context;
    return setTimeout(this._updateScrollData, 0), e2;
  }
  startMeasuringScrollPosition() {
    null == t || t.addEventListener("scroll", this._updateScrollData, true), null == t || t.addEventListener("scrollend", this._updateScrollData, true), null == t || t.addEventListener("resize", this._updateScrollData);
  }
  scrollElement() {
    if (!this.instance.config.scroll_root_selector) return null == t ? void 0 : t.document.documentElement;
    var e2 = x(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector];
    for (var i2 of e2) {
      var n2 = null == t ? void 0 : t.document.querySelector(i2);
      if (n2) return n2;
    }
  }
  scrollY() {
    if (this.instance.config.scroll_root_selector) {
      var e2 = this.scrollElement();
      return e2 && e2.scrollTop || 0;
    }
    return t && (t.scrollY || t.pageYOffset || t.document.documentElement.scrollTop) || 0;
  }
  scrollX() {
    if (this.instance.config.scroll_root_selector) {
      var e2 = this.scrollElement();
      return e2 && e2.scrollLeft || 0;
    }
    return t && (t.scrollX || t.pageXOffset || t.document.documentElement.scrollLeft) || 0;
  }
};
var Ds = B("[AutoCapture]");
function Ns(e2, t2) {
  return t2.length > e2 ? t2.slice(0, e2) + "..." : t2;
}
function qs(e2) {
  if (e2.previousElementSibling) return e2.previousElementSibling;
  var t2 = e2;
  do {
    t2 = t2.previousSibling;
  } while (t2 && !xi(t2));
  return t2;
}
function Bs(e2, t2, i2, n2) {
  var r2 = e2.tagName.toLowerCase(), s2 = { tag_name: r2 };
  Li.indexOf(r2) > -1 && !i2 && ("a" === r2.toLowerCase() || "button" === r2.toLowerCase() ? s2.$el_text = Ns(1024, Gi(e2)) : s2.$el_text = Ns(1024, Oi(e2)));
  var o2 = Ti(e2);
  o2.length > 0 && (s2.classes = o2.filter(function(e3) {
    return "" !== e3;
  })), Y(e2.attributes, function(i3) {
    var r3;
    if ((!qi(e2) || -1 !== ["name", "id", "class", "aria-label"].indexOf(i3.name)) && ((null == n2 || !n2.includes(i3.name)) && !t2 && Vi(i3.value) && (r3 = i3.name, !R(r3) || "_ngcontent" !== r3.substring(0, 10) && "_nghost" !== r3.substring(0, 7)))) {
      var o3 = i3.value;
      "class" === i3.name && (o3 = Fi(o3).join(" ")), s2["attr__" + i3.name] = Ns(1024, o3);
    }
  });
  for (var a2 = 1, l2 = 1, u2 = e2; u2 = qs(u2); ) a2++, u2.tagName === e2.tagName && l2++;
  return s2.nth_child = a2, s2.nth_of_type = l2, s2;
}
function Hs(e2, i2) {
  for (var n2, r2, { e: s2, maskAllElementAttributes: o2, maskAllText: a2, elementAttributeIgnoreList: l2, elementsChainAsString: u2 } = i2, c2 = [e2], d2 = e2; d2.parentNode && !Ii(d2, "body"); ) Pi(d2.parentNode) ? (c2.push(d2.parentNode.host), d2 = d2.parentNode.host) : (c2.push(d2.parentNode), d2 = d2.parentNode);
  var h2, _2 = [], p2 = {}, v2 = false, g2 = false;
  if (Y(c2, (e3) => {
    var t2 = Ni(e3);
    "a" === e3.tagName.toLowerCase() && (v2 = e3.getAttribute("href"), v2 = t2 && v2 && Vi(v2) && v2), m(Ti(e3), "ph-no-capture") && (g2 = true), _2.push(Bs(e3, o2, a2, l2));
    var i3 = function(e4) {
      if (!Ni(e4)) return {};
      var t3 = {};
      return Y(e4.attributes, function(e5) {
        if (e5.name && 0 === e5.name.indexOf("data-ph-capture-attribute")) {
          var i4 = e5.name.replace("data-ph-capture-attribute-", ""), n3 = e5.value;
          i4 && n3 && Vi(n3) && (t3[i4] = n3);
        }
      }), t3;
    }(e3);
    K(p2, i3);
  }), g2) return { props: {}, explicitNoCapture: g2 };
  if (a2 || ("a" === e2.tagName.toLowerCase() || "button" === e2.tagName.toLowerCase() ? _2[0].$el_text = Gi(e2) : _2[0].$el_text = Oi(e2)), v2) {
    var f, b2;
    _2[0].attr__href = v2;
    var y2 = null === (f = vt(v2)) || void 0 === f ? void 0 : f.host, w2 = null == t || null === (b2 = t.location) || void 0 === b2 ? void 0 : b2.host;
    y2 && w2 && y2 !== w2 && (h2 = v2);
  }
  return { props: K({ $event_type: s2.type, $ce_version: 1 }, u2 ? {} : { $elements: _2 }, { $elements_chain: Yi(_2) }, null !== (n2 = _2[0]) && void 0 !== n2 && n2.$el_text ? { $el_text: null === (r2 = _2[0]) || void 0 === r2 ? void 0 : r2.$el_text } : {}, h2 && "click" === s2.type ? { $external_click_url: h2 } : {}, p2) };
}
var Us = class {
  constructor(e2) {
    W(this, "_initialized", false), W(this, "_isDisabledServerSide", null), W(this, "rageclicks", new Ps()), W(this, "_elementsChainAsString", false), this.instance = e2, this._elementSelectors = null;
  }
  get config() {
    var e2, t2, i2 = C(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
    return i2.url_allowlist = null === (e2 = i2.url_allowlist) || void 0 === e2 ? void 0 : e2.map((e3) => new RegExp(e3)), i2.url_ignorelist = null === (t2 = i2.url_ignorelist) || void 0 === t2 ? void 0 : t2.map((e3) => new RegExp(e3)), i2;
  }
  _addDomEventHandlers() {
    if (this.isBrowserSupported()) {
      if (t && a) {
        var e2 = (e3) => {
          e3 = e3 || (null == t ? void 0 : t.event);
          try {
            this._captureEvent(e3);
          } catch (e4) {
            Ds.error("Failed to capture event", e4);
          }
        }, i2 = (e3) => {
          e3 = e3 || (null == t ? void 0 : t.event), this._captureEvent(e3, v);
        };
        ie(a, "submit", e2, false, true), ie(a, "change", e2, false, true), ie(a, "click", e2, false, true), this.config.capture_copied_text && (ie(a, "copy", i2, false, true), ie(a, "cut", i2, false, true));
      }
    } else Ds.info("Disabling Automatic Event Collection because this browser is not supported");
  }
  startIfEnabled() {
    this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = true);
  }
  onRemoteConfig(e2) {
    e2.elementsChainAsString && (this._elementsChainAsString = e2.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({ [ae]: !!e2.autocapture_opt_out }), this._isDisabledServerSide = !!e2.autocapture_opt_out, this.startIfEnabled();
  }
  setElementSelectors(e2) {
    this._elementSelectors = e2;
  }
  getElementSelectors(e2) {
    var t2, i2 = [];
    return null === (t2 = this._elementSelectors) || void 0 === t2 || t2.forEach((t3) => {
      var n2 = null == a ? void 0 : a.querySelectorAll(t3);
      null == n2 || n2.forEach((n3) => {
        e2 === n3 && i2.push(t3);
      });
    }), i2;
  }
  get isEnabled() {
    var e2, t2, i2 = null === (e2 = this.instance.persistence) || void 0 === e2 ? void 0 : e2.props[ae], n2 = this._isDisabledServerSide;
    if ($(n2) && !L(i2) && !this.instance.config.advanced_disable_decide) return false;
    var r2 = null !== (t2 = this._isDisabledServerSide) && void 0 !== t2 ? t2 : !!i2;
    return !!this.instance.config.autocapture && !r2;
  }
  _captureEvent(e2) {
    var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
    if (this.isEnabled) {
      var n2, r2 = Mi(e2);
      if (Ci(r2) && (r2 = r2.parentNode || null), "$autocapture" === i2 && "click" === e2.type && e2 instanceof MouseEvent) this.instance.config.rageclick && null !== (n2 = this.rageclicks) && void 0 !== n2 && n2.isRageClick(e2.clientX, e2.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._captureEvent(e2, "$rageclick");
      var s2 = i2 === v;
      if (r2 && Di(r2, e2, this.config, s2, s2 ? ["copy", "cut"] : void 0)) {
        var { props: o2, explicitNoCapture: a2 } = Hs(r2, { e: e2, maskAllElementAttributes: this.instance.config.mask_all_element_attributes, maskAllText: this.instance.config.mask_all_text, elementAttributeIgnoreList: this.config.element_attribute_ignorelist, elementsChainAsString: this._elementsChainAsString });
        if (a2) return false;
        var l2 = this.getElementSelectors(r2);
        if (l2 && l2.length > 0 && (o2.$element_selectors = l2), i2 === v) {
          var u2, c2 = $i(null == t || null === (u2 = t.getSelection()) || void 0 === u2 ? void 0 : u2.toString()), d2 = e2.type || "clipboard";
          if (!c2) return false;
          o2.$selected_content = c2, o2.$copy_type = d2;
        }
        return this.instance.capture(i2, o2), true;
      }
    }
  }
  isBrowserSupported() {
    return I(null == a ? void 0 : a.querySelectorAll);
  }
};
var zs = B("[TracingHeaders]");
var js = class {
  constructor(e2) {
    W(this, "_restoreXHRPatch", void 0), W(this, "_restoreFetchPatch", void 0), W(this, "_startCapturing", () => {
      var e3, t2, i2, n2;
      F(this._restoreXHRPatch) && (null === (e3 = _.__PosthogExtensions__) || void 0 === e3 || null === (t2 = e3.tracingHeadersPatchFns) || void 0 === t2 || t2._patchXHR(this.instance.sessionManager));
      F(this._restoreFetchPatch) && (null === (i2 = _.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.tracingHeadersPatchFns) || void 0 === n2 || n2._patchFetch(this.instance.sessionManager));
    }), this.instance = e2;
  }
  _loadScript(e2) {
    var t2, i2, n2;
    null !== (t2 = _.__PosthogExtensions__) && void 0 !== t2 && t2.tracingHeadersPatchFns && e2(), null === (i2 = _.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.loadExternalDependency) || void 0 === n2 || n2.call(i2, this.instance, "tracing-headers", (t3) => {
      if (t3) return zs.error("failed to load script", t3);
      e2();
    });
  }
  startIfEnabledOrStop() {
    var e2, t2;
    this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e2 = this._restoreXHRPatch) || void 0 === e2 || e2.call(this), null === (t2 = this._restoreFetchPatch) || void 0 === t2 || t2.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0);
  }
};
var Ws;
!function(e2) {
  e2[e2.PENDING = -1] = "PENDING", e2[e2.DENIED = 0] = "DENIED", e2[e2.GRANTED = 1] = "GRANTED";
}(Ws || (Ws = {}));
var Vs = class {
  constructor(e2) {
    this.instance = e2;
  }
  get config() {
    return this.instance.config;
  }
  get consent() {
    return this.getDnt() ? Ws.DENIED : this.storedConsent;
  }
  isOptedOut() {
    return this.consent === Ws.DENIED || this.consent === Ws.PENDING && this.config.opt_out_capturing_by_default;
  }
  isOptedIn() {
    return !this.isOptedOut();
  }
  optInOut(e2) {
    this.storage.set(this.storageKey, e2 ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie);
  }
  reset() {
    this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie);
  }
  get storageKey() {
    var { token: e2, opt_out_capturing_cookie_prefix: t2 } = this.instance.config;
    return (t2 || "__ph_opt_in_out_") + e2;
  }
  get storedConsent() {
    var e2 = this.storage.get(this.storageKey);
    return "1" === e2 ? Ws.GRANTED : "0" === e2 ? Ws.DENIED : Ws.PENDING;
  }
  get storage() {
    if (!this._storage) {
      var e2 = this.config.opt_out_capturing_persistence_type;
      this._storage = "localStorage" === e2 ? at : st;
      var t2 = "localStorage" === e2 ? st : at;
      t2.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t2.get(this.storageKey)), t2.remove(this.storageKey, this.config.cross_subdomain_cookie));
    }
    return this._storage;
  }
  getDnt() {
    return !!this.config.respect_dnt && !!ne([null == o ? void 0 : o.doNotTrack, null == o ? void 0 : o.msDoNotTrack, _.doNotTrack], (e2) => m([true, 1, "1", "yes"], e2));
  }
};
var Gs = B("[ExceptionAutocapture]");
var Js = class {
  constructor(e2) {
    var i2;
    W(this, "originalOnUnhandledRejectionHandler", void 0), W(this, "startCapturing", () => {
      var e3, i3, n2, r2;
      if (t && this.isEnabled && !this.hasHandlers && !this.isCapturing) {
        var s2 = null === (e3 = _.__PosthogExtensions__) || void 0 === e3 || null === (i3 = e3.errorWrappingFunctions) || void 0 === i3 ? void 0 : i3.wrapOnError, o2 = null === (n2 = _.__PosthogExtensions__) || void 0 === n2 || null === (r2 = n2.errorWrappingFunctions) || void 0 === r2 ? void 0 : r2.wrapUnhandledRejection;
        if (s2 && o2) try {
          this.unwrapOnError = s2(this.captureException.bind(this)), this.unwrapUnhandledRejection = o2(this.captureException.bind(this));
        } catch (e4) {
          Gs.error("failed to start", e4), this.stopCapturing();
        }
        else Gs.error("failed to load error wrapping functions - cannot start");
      }
    }), this.instance = e2, this.remoteEnabled = !(null === (i2 = this.instance.persistence) || void 0 === i2 || !i2.props[ue]), this.startIfEnabled();
  }
  get isEnabled() {
    var e2;
    return null !== (e2 = this.remoteEnabled) && void 0 !== e2 && e2;
  }
  get isCapturing() {
    var e2;
    return !(null == t || null === (e2 = t.onerror) || void 0 === e2 || !e2.__POSTHOG_INSTRUMENTED__);
  }
  get hasHandlers() {
    return this.originalOnUnhandledRejectionHandler || this.unwrapOnError;
  }
  startIfEnabled() {
    this.isEnabled && !this.isCapturing && (Gs.info("enabled, starting..."), this.loadScript(this.startCapturing));
  }
  loadScript(e2) {
    var t2, i2;
    this.hasHandlers && e2(), null === (t2 = _.__PosthogExtensions__) || void 0 === t2 || null === (i2 = t2.loadExternalDependency) || void 0 === i2 || i2.call(t2, this.instance, "exception-autocapture", (t3) => {
      if (t3) return Gs.error("failed to load script", t3);
      e2();
    });
  }
  stopCapturing() {
    var e2, t2;
    null === (e2 = this.unwrapOnError) || void 0 === e2 || e2.call(this), null === (t2 = this.unwrapUnhandledRejection) || void 0 === t2 || t2.call(this);
  }
  onRemoteConfig(e2) {
    var t2 = e2.autocaptureExceptions;
    this.remoteEnabled = !!t2 || false, this.instance.persistence && this.instance.persistence.register({ [ue]: this.remoteEnabled }), this.startIfEnabled();
  }
  captureException(e2) {
    var t2 = this.instance.requestRouter.endpointFor("ui");
    e2.$exception_personURL = "".concat(t2, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id()), this.instance.exceptions.sendExceptionEvent(e2);
  }
};
var Ys = B("[Web Vitals]");
var Ks = 9e5;
var Xs = class {
  constructor(e2) {
    var t2;
    W(this, "_enabledServerSide", false), W(this, "_initialized", false), W(this, "buffer", { url: void 0, metrics: [], firstMetricTimestamp: void 0 }), W(this, "_flushToCapture", () => {
      clearTimeout(this._delayedFlushTimer), 0 !== this.buffer.metrics.length && (this.instance.capture("$web_vitals", this.buffer.metrics.reduce((e3, t3) => j(j({}, e3), {}, { ["$web_vitals_".concat(t3.name, "_event")]: j({}, t3), ["$web_vitals_".concat(t3.name, "_value")]: t3.value }), {})), this.buffer = { url: void 0, metrics: [], firstMetricTimestamp: void 0 });
    }), W(this, "_addToBuffer", (e3) => {
      var t3, i2 = null === (t3 = this.instance.sessionManager) || void 0 === t3 ? void 0 : t3.checkAndGetSessionAndWindowId(true);
      if (F(i2)) Ys.error("Could not read session ID. Dropping metrics!");
      else {
        this.buffer = this.buffer || { url: void 0, metrics: [], firstMetricTimestamp: void 0 };
        var n2 = this._currentURL();
        if (!F(n2)) if (O(null == e3 ? void 0 : e3.name) || O(null == e3 ? void 0 : e3.value)) Ys.error("Invalid metric received", e3);
        else if (this._maxAllowedValue && e3.value >= this._maxAllowedValue) Ys.error("Ignoring metric with value >= " + this._maxAllowedValue, e3);
        else this.buffer.url !== n2 && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), F(this.buffer.url) && (this.buffer.url = n2), this.buffer.firstMetricTimestamp = F(this.buffer.firstMetricTimestamp) ? Date.now() : this.buffer.firstMetricTimestamp, e3.attribution && e3.attribution.interactionTargetElement && (e3.attribution.interactionTargetElement = void 0), this.buffer.metrics.push(j(j({}, e3), {}, { $current_url: n2, $session_id: i2.sessionId, $window_id: i2.windowId, timestamp: Date.now() })), this.buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture();
      }
    }), W(this, "_startCapturing", () => {
      var e3, t3, i2, n2, r2 = _.__PosthogExtensions__;
      F(r2) || F(r2.postHogWebVitalsCallbacks) || ({ onLCP: e3, onCLS: t3, onFCP: i2, onINP: n2 } = r2.postHogWebVitalsCallbacks), e3 && t3 && i2 && n2 ? (this.allowedMetrics.indexOf("LCP") > -1 && e3(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && t3(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && i2(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && n2(this._addToBuffer.bind(this)), this._initialized = true) : Ys.error("web vitals callbacks not loaded - not starting");
    }), this.instance = e2, this._enabledServerSide = !(null === (t2 = this.instance.persistence) || void 0 === t2 || !t2.props[ce]), this.startIfEnabled();
  }
  get allowedMetrics() {
    var e2, t2, i2 = C(this.instance.config.capture_performance) ? null === (e2 = this.instance.config.capture_performance) || void 0 === e2 ? void 0 : e2.web_vitals_allowed_metrics : void 0;
    return F(i2) ? (null === (t2 = this.instance.persistence) || void 0 === t2 ? void 0 : t2.props[he]) || ["CLS", "FCP", "INP", "LCP"] : i2;
  }
  get flushToCaptureTimeoutMs() {
    return (C(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3;
  }
  get _maxAllowedValue() {
    var e2 = C(this.instance.config.capture_performance) && M(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : Ks;
    return 0 < e2 && e2 <= 6e4 ? Ks : e2;
  }
  get isEnabled() {
    var e2 = C(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
    return L(e2) ? e2 : this._enabledServerSide;
  }
  startIfEnabled() {
    this.isEnabled && !this._initialized && (Ys.info("enabled, starting..."), this.loadScript(this._startCapturing));
  }
  onRemoteConfig(e2) {
    var t2 = C(e2.capturePerformance) && !!e2.capturePerformance.web_vitals, i2 = C(e2.capturePerformance) ? e2.capturePerformance.web_vitals_allowed_metrics : void 0;
    this.instance.persistence && (this.instance.persistence.register({ [ce]: t2 }), this.instance.persistence.register({ [he]: i2 })), this._enabledServerSide = t2, this.startIfEnabled();
  }
  loadScript(e2) {
    var t2, i2, n2;
    null !== (t2 = _.__PosthogExtensions__) && void 0 !== t2 && t2.postHogWebVitalsCallbacks && e2(), null === (i2 = _.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.loadExternalDependency) || void 0 === n2 || n2.call(i2, this.instance, "web-vitals", (t3) => {
      t3 ? Ys.error("failed to load script", t3) : e2();
    });
  }
  _currentURL() {
    var e2 = t ? t.location.href : void 0;
    return e2 || Ys.error("Could not determine current URL"), e2;
  }
};
var Qs = { icontains: (e2, i2) => !!t && i2.href.toLowerCase().indexOf(e2.toLowerCase()) > -1, not_icontains: (e2, i2) => !!t && -1 === i2.href.toLowerCase().indexOf(e2.toLowerCase()), regex: (e2, i2) => !!t && gt(i2.href, e2), not_regex: (e2, i2) => !!t && !gt(i2.href, e2), exact: (e2, t2) => t2.href === e2, is_not: (e2, t2) => t2.href !== e2 };
var Zs = class _Zs {
  constructor(e2) {
    var t2 = this;
    W(this, "getWebExperimentsAndEvaluateDisplayLogic", function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      t2.getWebExperiments((e4) => {
        _Zs.logInfo("retrieved web experiments from the server"), t2._flagToExperiments = /* @__PURE__ */ new Map(), e4.forEach((e5) => {
          if (e5.feature_flag_key) {
            var i2;
            if (t2._flagToExperiments) _Zs.logInfo("setting flag key ", e5.feature_flag_key, " to web experiment ", e5), null === (i2 = t2._flagToExperiments) || void 0 === i2 || i2.set(e5.feature_flag_key, e5);
            var n2 = t2.instance.getFeatureFlag(e5.feature_flag_key);
            R(n2) && e5.variants[n2] && t2.applyTransforms(e5.name, n2, e5.variants[n2].transforms);
          } else if (e5.variants) for (var r2 in e5.variants) {
            var s2 = e5.variants[r2];
            _Zs.matchesTestVariant(s2) && t2.applyTransforms(e5.name, r2, s2.transforms);
          }
        });
      }, e3);
    }), this.instance = e2, this.instance.onFeatureFlags((e3) => {
      this.onFeatureFlags(e3);
    });
  }
  onFeatureFlags(e2) {
    if (this._is_bot()) _Zs.logInfo("Refusing to render web experiment since the viewer is a likely bot");
    else if (!this.instance.config.disable_web_experiments) {
      if (O(this._flagToExperiments)) return this._flagToExperiments = /* @__PURE__ */ new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
      _Zs.logInfo("applying feature flags", e2), e2.forEach((e3) => {
        var t2;
        if (this._flagToExperiments && null !== (t2 = this._flagToExperiments) && void 0 !== t2 && t2.has(e3)) {
          var i2, n2 = this.instance.getFeatureFlag(e3), r2 = null === (i2 = this._flagToExperiments) || void 0 === i2 ? void 0 : i2.get(e3);
          n2 && null != r2 && r2.variants[n2] && this.applyTransforms(r2.name, n2, r2.variants[n2].transforms);
        }
      });
    }
  }
  previewWebExperiment() {
    var e2 = _Zs.getWindowLocation();
    if (null != e2 && e2.search) {
      var t2 = mt(null == e2 ? void 0 : e2.search, "__experiment_id"), i2 = mt(null == e2 ? void 0 : e2.search, "__experiment_variant");
      t2 && i2 && (_Zs.logInfo("previewing web experiments ".concat(t2, " && ").concat(i2)), this.getWebExperiments((e3) => {
        this.showPreviewWebExperiment(parseInt(t2), i2, e3);
      }, false, true));
    }
  }
  loadIfEnabled() {
    this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
  }
  getWebExperiments(e2, t2, i2) {
    if (this.instance.config.disable_web_experiments && !i2) return e2([]);
    var n2 = this.instance.get_property("$web_experiments");
    if (n2 && !t2) return e2(n2);
    this.instance._send_request({ url: this.instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=".concat(this.instance.config.token)), method: "GET", callback: (t3) => {
      if (200 !== t3.statusCode || !t3.json) return e2([]);
      var i3 = t3.json.experiments || [];
      return e2(i3);
    } });
  }
  showPreviewWebExperiment(e2, t2, i2) {
    var n2 = i2.filter((t3) => t3.id === e2);
    n2 && n2.length > 0 && (_Zs.logInfo("Previewing web experiment [".concat(n2[0].name, "] with variant [").concat(t2, "]")), this.applyTransforms(n2[0].name, t2, n2[0].variants[t2].transforms, true));
  }
  static matchesTestVariant(e2) {
    return !O(e2.conditions) && (_Zs.matchUrlConditions(e2) && _Zs.matchUTMConditions(e2));
  }
  static matchUrlConditions(e2) {
    var t2;
    if (O(e2.conditions) || O(null === (t2 = e2.conditions) || void 0 === t2 ? void 0 : t2.url)) return true;
    var i2, n2, r2, s2 = _Zs.getWindowLocation();
    return !!s2 && (null === (i2 = e2.conditions) || void 0 === i2 || !i2.url || Qs[null !== (n2 = null === (r2 = e2.conditions) || void 0 === r2 ? void 0 : r2.urlMatchType) && void 0 !== n2 ? n2 : "icontains"](e2.conditions.url, s2));
  }
  static getWindowLocation() {
    return null == t ? void 0 : t.location;
  }
  static matchUTMConditions(e2) {
    var t2;
    if (O(e2.conditions) || O(null === (t2 = e2.conditions) || void 0 === t2 ? void 0 : t2.utm)) return true;
    var i2 = fi.campaignParams();
    if (i2.utm_source) {
      var n2, r2, s2, o2, a2, l2, u2, c2, d2, h2, _2, p2, v2, g2, f, m2, b2 = null === (n2 = e2.conditions) || void 0 === n2 || null === (r2 = n2.utm) || void 0 === r2 || !r2.utm_campaign || (null === (s2 = e2.conditions) || void 0 === s2 || null === (o2 = s2.utm) || void 0 === o2 ? void 0 : o2.utm_campaign) == i2.utm_campaign, y2 = null === (a2 = e2.conditions) || void 0 === a2 || null === (l2 = a2.utm) || void 0 === l2 || !l2.utm_source || (null === (u2 = e2.conditions) || void 0 === u2 || null === (c2 = u2.utm) || void 0 === c2 ? void 0 : c2.utm_source) == i2.utm_source, w2 = null === (d2 = e2.conditions) || void 0 === d2 || null === (h2 = d2.utm) || void 0 === h2 || !h2.utm_medium || (null === (_2 = e2.conditions) || void 0 === _2 || null === (p2 = _2.utm) || void 0 === p2 ? void 0 : p2.utm_medium) == i2.utm_medium, S2 = null === (v2 = e2.conditions) || void 0 === v2 || null === (g2 = v2.utm) || void 0 === g2 || !g2.utm_term || (null === (f = e2.conditions) || void 0 === f || null === (m2 = f.utm) || void 0 === m2 ? void 0 : m2.utm_term) == i2.utm_term;
      return b2 && w2 && S2 && y2;
    }
    return false;
  }
  static logInfo(e2) {
    for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) i2[n2 - 1] = arguments[n2];
    q.info("[WebExperiments] ".concat(e2), i2);
  }
  applyTransforms(e2, t2, i2, n2) {
    var r2;
    this._is_bot() ? _Zs.logInfo("Refusing to render web experiment since the viewer is a likely bot") : "control" !== t2 ? i2.forEach((i3) => {
      if (i3.selector) {
        var r3;
        _Zs.logInfo("applying transform of variant ".concat(t2, " for experiment ").concat(e2, " "), i3);
        var s2, o2 = 0, a2 = null === (r3 = document) || void 0 === r3 ? void 0 : r3.querySelectorAll(i3.selector);
        if (null == a2 || a2.forEach((e3) => {
          var t3 = e3;
          o2 += 1, i3.attributes && i3.attributes.forEach((e4) => {
            switch (e4.name) {
              case "text":
                t3.innerText = e4.value;
                break;
              case "html":
                t3.innerHTML = e4.value;
                break;
              case "cssClass":
                t3.className = e4.value;
                break;
              default:
                t3.setAttribute(e4.name, e4.value);
            }
          }), i3.text && (t3.innerText = i3.text), i3.html && (t3.parentElement ? t3.parentElement.innerHTML = i3.html : t3.innerHTML = i3.html), i3.css && t3.setAttribute("style", i3.css);
        }), this.instance && this.instance.capture) this.instance.capture("$web_experiment_applied", { $web_experiment_name: e2, $web_experiment_variant: t2, $web_experiment_preview: n2, $web_experiment_document_url: null === (s2 = _Zs.getWindowLocation()) || void 0 === s2 ? void 0 : s2.href, $web_experiment_elements_modified: o2 });
      }
    }) : (_Zs.logInfo("Control variants leave the page unmodified."), this.instance && this.instance.capture && this.instance.capture("$web_experiment_applied", { $web_experiment_name: e2, $web_experiment_preview: n2, $web_experiment_variant: t2, $web_experiment_document_url: null === (r2 = _Zs.getWindowLocation()) || void 0 === r2 ? void 0 : r2.href, $web_experiment_elements_modified: 0 }));
  }
  _is_bot() {
    return o && this.instance ? Cs(o, this.instance.config.custom_blocked_useragents) : void 0;
  }
};
var eo = class {
  constructor(e2) {
    this.instance = e2;
  }
  sendExceptionEvent(e2) {
    this.instance.capture("$exception", e2, { _noTruncate: true, _batchKey: "exceptionEvent" });
  }
};
var to = ["$set_once", "$set"];
var io = B("[SiteApps]");
var no = class {
  constructor(e2) {
    this.instance = e2, this.bufferedInvocations = [], this.apps = {};
  }
  get isEnabled() {
    return !!this.instance.config.opt_in_site_apps;
  }
  eventCollector(e2, t2) {
    if (t2) {
      var i2 = this.globalsForEvent(t2);
      this.bufferedInvocations.push(i2), this.bufferedInvocations.length > 1e3 && (this.bufferedInvocations = this.bufferedInvocations.slice(10));
    }
  }
  get siteAppLoaders() {
    var e2, t2;
    return null === (e2 = _._POSTHOG_REMOTE_CONFIG) || void 0 === e2 || null === (t2 = e2[this.instance.config.token]) || void 0 === t2 ? void 0 : t2.siteApps;
  }
  init() {
    if (this.isEnabled) {
      var e2 = this.instance._addCaptureHook(this.eventCollector.bind(this));
      this.stopBuffering = () => {
        e2(), this.bufferedInvocations = [], this.stopBuffering = void 0;
      };
    }
  }
  globalsForEvent(e2) {
    var t2, i2, n2, r2, s2, o2, a2;
    if (!e2) throw new Error("Event payload is required");
    var l2 = {}, u2 = this.instance.get_property("$groups") || [], c2 = this.instance.get_property("$stored_group_properties") || {};
    for (var [d2, h2] of Object.entries(c2)) l2[d2] = { id: u2[d2], type: d2, properties: h2 };
    var { $set_once: _2, $set: p2 } = e2;
    return { event: j(j({}, V(e2, to)), {}, { properties: j(j(j({}, e2.properties), p2 ? { $set: j(j({}, null !== (t2 = null === (i2 = e2.properties) || void 0 === i2 ? void 0 : i2.$set) && void 0 !== t2 ? t2 : {}), p2) } : {}), _2 ? { $set_once: j(j({}, null !== (n2 = null === (r2 = e2.properties) || void 0 === r2 ? void 0 : r2.$set_once) && void 0 !== n2 ? n2 : {}), _2) } : {}), elements_chain: null !== (s2 = null === (o2 = e2.properties) || void 0 === o2 ? void 0 : o2.$elements_chain) && void 0 !== s2 ? s2 : "", distinct_id: null === (a2 = e2.properties) || void 0 === a2 ? void 0 : a2.distinct_id }), person: { properties: this.instance.get_property("$stored_person_properties") }, groups: l2 };
  }
  setupSiteApp(e2) {
    var t2 = { id: e2.id, loaded: false, errored: false };
    this.apps[e2.id] = t2;
    var i2 = (i3) => {
      var n3;
      for (var r2 of (this.apps[e2.id].errored = !i3, this.apps[e2.id].loaded = true, io.info("Site app with id ".concat(e2.id, " ").concat(i3 ? "loaded" : "errored")), i3 && this.bufferedInvocations.length && (io.info("Processing ".concat(this.bufferedInvocations.length, " events for site app with id ").concat(e2.id)), this.bufferedInvocations.forEach((e3) => {
        var i4;
        return null === (i4 = t2.processEvent) || void 0 === i4 ? void 0 : i4.call(t2, e3);
      })), Object.values(this.apps))) if (!r2.loaded) return;
      null === (n3 = this.stopBuffering) || void 0 === n3 || n3.call(this);
    };
    try {
      var { processEvent: n2 } = e2.init({ posthog: this.instance, callback: (e3) => {
        i2(e3);
      } });
      n2 && (t2.processEvent = n2);
    } catch (t3) {
      io.error("Error while initializing PostHog app with config id ".concat(e2.id), t3), i2(false);
    }
  }
  onCapturedEvent(e2) {
    if (0 !== Object.keys(this.apps).length) {
      var t2 = this.globalsForEvent(e2);
      for (var i2 of Object.values(this.apps)) try {
        var n2;
        null === (n2 = i2.processEvent) || void 0 === n2 || n2.call(i2, t2);
      } catch (t3) {
        io.error("Error while processing event ".concat(e2.event, " for site app ").concat(i2.id), t3);
      }
    }
  }
  onRemoteConfig(e2) {
    var t2, i2, n2, r2 = this;
    if (null !== (t2 = this.siteAppLoaders) && void 0 !== t2 && t2.length) {
      if (!this.isEnabled) return void io.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
      for (var s2 of this.siteAppLoaders) this.setupSiteApp(s2);
      this.instance.on("eventCaptured", (e3) => this.onCapturedEvent(e3));
    } else if (null === (i2 = this.stopBuffering) || void 0 === i2 || i2.call(this), null !== (n2 = e2.siteApps) && void 0 !== n2 && n2.length) if (this.isEnabled) {
      var o2 = function(e3, t3) {
        var i3, n3;
        _["__$$ph_site_app_".concat(e3)] = r2.instance, null === (i3 = _.__PosthogExtensions__) || void 0 === i3 || null === (n3 = i3.loadSiteApp) || void 0 === n3 || n3.call(i3, r2.instance, t3, (t4) => {
          if (t4) return io.error("Error while initializing PostHog app with config id ".concat(e3), t4);
        });
      };
      for (var { id: a2, url: l2 } of e2.siteApps) o2(a2, l2);
    } else io.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
  }
};
var ro = {};
var so = () => {
};
var oo = "posthog";
var ao = !hr && -1 === (null == h ? void 0 : h.indexOf("MSIE")) && -1 === (null == h ? void 0 : h.indexOf("Mozilla"));
var lo = () => {
  var e2, i2, n2;
  return { api_host: "https://us.i.posthog.com", ui_host: null, token: "", autocapture: true, rageclick: true, cross_subdomain_cookie: (i2 = null == a ? void 0 : a.location, n2 = null == i2 ? void 0 : i2.hostname, !!R(n2) && "herokuapp.com" !== n2.split(".").slice(-2).join(".")), persistence: "localStorage+cookie", persistence_name: "", loaded: so, store_google: true, custom_campaign_params: [], custom_blocked_useragents: [], save_referrer: true, capture_pageview: true, capture_pageleave: "if_capture_pageview", debug: l && R(null == l ? void 0 : l.search) && -1 !== l.search.indexOf("__posthog_debug=true") || false, verbose: false, cookie_expiration: 365, upgrade: false, disable_session_recording: false, disable_persistence: false, disable_web_experiments: true, disable_surveys: false, enable_recording_console_log: void 0, secure_cookie: "https:" === (null == t || null === (e2 = t.location) || void 0 === e2 ? void 0 : e2.protocol), ip: true, opt_out_capturing_by_default: false, opt_out_persistence_by_default: false, opt_out_useragent_filter: false, opt_out_capturing_persistence_type: "localStorage", opt_out_capturing_cookie_prefix: null, opt_in_site_apps: false, property_denylist: [], respect_dnt: false, sanitize_properties: null, request_headers: {}, inapp_protocol: "//", inapp_link_new_window: false, request_batching: true, properties_string_max_length: 65535, session_recording: {}, mask_all_element_attributes: false, mask_all_text: false, advanced_disable_decide: false, advanced_disable_feature_flags: false, advanced_disable_feature_flags_on_first_load: false, advanced_disable_toolbar_metrics: false, feature_flag_request_timeout_ms: 3e3, on_request_error: (e3) => {
    var t2 = "Bad HTTP status: " + e3.statusCode + " " + e3.text;
    q.error(t2);
  }, get_device_id: (e3) => e3, _onCapture: so, capture_performance: void 0, name: "posthog", bootstrap: {}, disable_compression: false, session_idle_timeout_seconds: 1800, person_profiles: "identified_only", __add_tracing_headers: false, before_send: void 0 };
};
var uo = (e2) => {
  var t2 = {};
  F(e2.process_person) || (t2.person_profiles = e2.process_person), F(e2.xhr_headers) || (t2.request_headers = e2.xhr_headers), F(e2.cookie_name) || (t2.persistence_name = e2.cookie_name), F(e2.disable_cookie) || (t2.disable_persistence = e2.disable_cookie);
  var i2 = K({}, t2, e2);
  return x(e2.property_blacklist) && (F(e2.property_denylist) ? i2.property_denylist = e2.property_blacklist : x(e2.property_denylist) ? i2.property_denylist = [...e2.property_blacklist, ...e2.property_denylist] : q.error("Invalid value for property_denylist config: " + e2.property_denylist)), i2;
};
var co = class {
  constructor() {
    W(this, "__forceAllowLocalhost", false);
  }
  get _forceAllowLocalhost() {
    return this.__forceAllowLocalhost;
  }
  set _forceAllowLocalhost(e2) {
    q.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e2;
  }
};
var ho = class _ho {
  get decideEndpointWasHit() {
    var e2, t2;
    return null !== (e2 = null === (t2 = this.featureFlags) || void 0 === t2 ? void 0 : t2.hasLoadedFlags) && void 0 !== e2 && e2;
  }
  constructor() {
    W(this, "webPerformance", new co()), W(this, "version", p.LIB_VERSION), W(this, "_internalEventEmitter", new Mr()), this.config = lo(), this.SentryIntegration = Cr, this.sentryIntegration = (e2) => function(e3, t2) {
      var i2 = Ir(e3, t2);
      return { name: xr, processEvent: (e4) => i2(e4) };
    }(this, e2), this.__request_queue = [], this.__loaded = false, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = false, this._initialPersonProfilesConfig = null, this.featureFlags = new Ve(this), this.toolbar = new ur(this), this.scrollManager = new As(this), this.pageViewManager = new Or(this), this.surveys = new ys(this), this.experiments = new Zs(this), this.exceptions = new eo(this), this.rateLimiter = new Ss(this), this.requestRouter = new kr(this), this.consent = new Vs(this), this.people = { set: (e2, t2, i2) => {
      var n2 = R(e2) ? { [e2]: t2 } : e2;
      this.setPersonProperties(n2), null == i2 || i2({});
    }, set_once: (e2, t2, i2) => {
      var n2 = R(e2) ? { [e2]: t2 } : e2;
      this.setPersonProperties(void 0, n2), null == i2 || i2({});
    } }, this.on("eventCaptured", (e2) => q.info('send "'.concat(null == e2 ? void 0 : e2.event, '"'), e2));
  }
  init(e2, t2, i2) {
    if (i2 && i2 !== oo) {
      var n2, r2 = null !== (n2 = ro[i2]) && void 0 !== n2 ? n2 : new _ho();
      return r2._init(e2, t2, i2), ro[i2] = r2, ro[oo][i2] = r2, r2;
    }
    return this._init(e2, t2, i2);
  }
  _init(i2) {
    var n2, r2, s2, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a2 = arguments.length > 2 ? arguments[2] : void 0;
    if (F(i2) || T(i2)) return q.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
    if (this.__loaded) return q.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
    this.__loaded = true, this.config = {}, this._triggered_notifs = [], o2.person_profiles && (this._initialPersonProfilesConfig = o2.person_profiles), this.set_config(K({}, lo(), uo(o2), { name: a2, token: i2 })), this.config.on_xhr_error && q.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = o2.disable_compression ? void 0 : e.GZipJS, this.persistence = new bi(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new bi(j(j({}, this.config), {}, { persistence: "sessionStorage" }));
    var l2 = j({}, this.persistence.props), u2 = j({}, this.sessionPersistence.props);
    if (this._requestQueue = new cr((e2) => this._send_retriable_request(e2)), this._retryQueue = new br(this), this.__request_queue = [], this.config.__preview_experimental_cookieless_mode || (this.sessionManager = new Sr(this), this.sessionPropsManager = new ks(this.sessionManager, this.persistence)), new js(this).startIfEnabledOrStop(), this.siteApps = new no(this), null === (n2 = this.siteApps) || void 0 === n2 || n2.init(), this.config.__preview_experimental_cookieless_mode || (this.sessionRecording = new ir(this), this.sessionRecording.startIfEnabledOrStop()), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new Us(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new Ls(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new Xs(this), this.exceptionObserver = new Js(this), this.exceptionObserver.startIfEnabled(), this.deadClicksAutocapture = new $s(this, Ts), this.deadClicksAutocapture.startIfEnabled(), p.DEBUG = p.DEBUG || this.config.debug, p.DEBUG && q.info("Starting in debug mode", { this: this, config: o2, thisC: j({}, this.config), p: l2, s: u2 }), this._sync_opt_out_with_persistence(), void 0 !== (null === (r2 = o2.bootstrap) || void 0 === r2 ? void 0 : r2.distinctID)) {
      var c2, d2, h2 = this.config.get_device_id(Ze()), _2 = null !== (c2 = o2.bootstrap) && void 0 !== c2 && c2.isIdentifiedID ? h2 : o2.bootstrap.distinctID;
      this.persistence.set_property(Te, null !== (d2 = o2.bootstrap) && void 0 !== d2 && d2.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: o2.bootstrap.distinctID, $device_id: _2 });
    }
    if (this._hasBootstrappedFeatureFlags()) {
      var v2, g2, f = Object.keys((null === (v2 = o2.bootstrap) || void 0 === v2 ? void 0 : v2.featureFlags) || {}).filter((e2) => {
        var t2, i3;
        return !(null === (t2 = o2.bootstrap) || void 0 === t2 || null === (i3 = t2.featureFlags) || void 0 === i3 || !i3[e2]);
      }).reduce((e2, t2) => {
        var i3, n3;
        return e2[t2] = (null === (i3 = o2.bootstrap) || void 0 === i3 || null === (n3 = i3.featureFlags) || void 0 === n3 ? void 0 : n3[t2]) || false, e2;
      }, {}), m2 = Object.keys((null === (g2 = o2.bootstrap) || void 0 === g2 ? void 0 : g2.featureFlagPayloads) || {}).filter((e2) => f[e2]).reduce((e2, t2) => {
        var i3, n3, r3, s3;
        null !== (i3 = o2.bootstrap) && void 0 !== i3 && null !== (n3 = i3.featureFlagPayloads) && void 0 !== n3 && n3[t2] && (e2[t2] = null === (r3 = o2.bootstrap) || void 0 === r3 || null === (s3 = r3.featureFlagPayloads) || void 0 === s3 ? void 0 : s3[t2]);
        return e2;
      }, {});
      this.featureFlags.receivedFeatureFlags({ featureFlags: f, featureFlagPayloads: m2 });
    }
    if (this.config.__preview_experimental_cookieless_mode) this.register_once({ distinct_id: qe, $device_id: null }, "");
    else if (!this.get_distinct_id()) {
      var b2 = this.config.get_device_id(Ze());
      this.register_once({ distinct_id: b2, $device_id: b2 }, ""), this.persistence.set_property(Te, "anonymous");
    }
    return null == t || null === (s2 = t.addEventListener) || void 0 === s2 || s2.call(t, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), this.toolbar.maybeLoadToolbar(), o2.segment ? $r(this, () => this._loaded()) : this._loaded(), I(this.config._onCapture) && this.config._onCapture !== so && (q.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (e2) => this.config._onCapture(e2.event, e2))), this;
  }
  _onRemoteConfig(t2) {
    var i2, n2, r2, s2, o2, l2, u2, c2, d2;
    if (!a || !a.body) return q.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(() => {
      this._onRemoteConfig(t2);
    }, 500);
    this.compression = void 0, t2.supportedCompression && !this.config.disable_compression && (this.compression = m(t2.supportedCompression, e.GZipJS) ? e.GZipJS : m(t2.supportedCompression, e.Base64) ? e.Base64 : void 0), null !== (i2 = t2.analytics) && void 0 !== i2 && i2.endpoint && (this.analyticsDefaultEndpoint = t2.analytics.endpoint), this.set_config({ person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : t2.defaultIdentifiedOnly ? "identified_only" : "always" }), null === (n2 = this.siteApps) || void 0 === n2 || n2.onRemoteConfig(t2), null === (r2 = this.sessionRecording) || void 0 === r2 || r2.onRemoteConfig(t2), null === (s2 = this.autocapture) || void 0 === s2 || s2.onRemoteConfig(t2), null === (o2 = this.heatmaps) || void 0 === o2 || o2.onRemoteConfig(t2), null === (l2 = this.surveys) || void 0 === l2 || l2.onRemoteConfig(t2), null === (u2 = this.webVitalsAutocapture) || void 0 === u2 || u2.onRemoteConfig(t2), null === (c2 = this.exceptionObserver) || void 0 === c2 || c2.onRemoteConfig(t2), null === (d2 = this.deadClicksAutocapture) || void 0 === d2 || d2.onRemoteConfig(t2);
  }
  _loaded() {
    try {
      this.config.loaded(this);
    } catch (e2) {
      q.critical("`loaded` function failed", e2);
    }
    this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout(() => {
      this.consent.isOptedIn() && this._captureInitialPageview();
    }, 1), new rr(this).load(), this.featureFlags.decide();
  }
  _start_queue_if_opted_in() {
    var e2;
    this.has_opted_out_capturing() || this.config.request_batching && (null === (e2 = this._requestQueue) || void 0 === e2 || e2.enable());
  }
  _dom_loaded() {
    this.has_opted_out_capturing() || J(this.__request_queue, (e2) => this._send_retriable_request(e2)), this.__request_queue = [], this._start_queue_if_opted_in();
  }
  _handle_unload() {
    var e2, t2;
    this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), null === (e2 = this._requestQueue) || void 0 === e2 || e2.unload(), null === (t2 = this._retryQueue) || void 0 === t2 || t2.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, { transport: "sendBeacon" });
  }
  _send_request(e2) {
    this.__loaded && (ao ? this.__request_queue.push(e2) : this.rateLimiter.isServerRateLimited(e2.batchKey) || (e2.transport = e2.transport || this.config.api_transport, e2.url = pr(e2.url, { ip: this.config.ip ? 1 : 0 }), e2.headers = j({}, this.config.request_headers), e2.compression = "best-available" === e2.compression ? this.compression : e2.compression, e2.fetchOptions = e2.fetchOptions || this.config.fetch_options, ((e3) => {
      var t2, i2, n2, r2 = j({}, e3);
      r2.timeout = r2.timeout || 6e4, r2.url = pr(r2.url, { _: (/* @__PURE__ */ new Date()).getTime().toString(), ver: p.LIB_VERSION, compression: r2.compression });
      var s2 = null !== (t2 = r2.transport) && void 0 !== t2 ? t2 : "fetch", o2 = null !== (i2 = null === (n2 = ne(fr, (e4) => e4.transport === s2)) || void 0 === n2 ? void 0 : n2.method) && void 0 !== i2 ? i2 : fr[0].method;
      if (!o2) throw new Error("No available transport method");
      o2(r2);
    })(j(j({}, e2), {}, { callback: (t2) => {
      var i2, n2, r2;
      (this.rateLimiter.checkForLimiting(t2), t2.statusCode >= 400) && (null === (n2 = (r2 = this.config).on_request_error) || void 0 === n2 || n2.call(r2, t2));
      null === (i2 = e2.callback) || void 0 === i2 || i2.call(e2, t2);
    } }))));
  }
  _send_retriable_request(e2) {
    this._retryQueue ? this._retryQueue.retriableRequest(e2) : this._send_request(e2);
  }
  _execute_array(e2) {
    var t2, i2 = [], n2 = [], r2 = [];
    J(e2, (e3) => {
      e3 && (t2 = e3[0], x(t2) ? r2.push(e3) : I(e3) ? e3.call(this) : x(e3) && "alias" === t2 ? i2.push(e3) : x(e3) && -1 !== t2.indexOf("capture") && I(this[t2]) ? r2.push(e3) : n2.push(e3));
    });
    var s2 = function(e3, t3) {
      J(e3, function(e4) {
        if (x(e4[0])) {
          var i3 = t3;
          Y(e4, function(e5) {
            i3 = i3[e5[0]].apply(i3, e5.slice(1));
          });
        } else this[e4[0]].apply(this, e4.slice(1));
      }, t3);
    };
    s2(i2, this), s2(n2, this), s2(r2, this);
  }
  _hasBootstrappedFeatureFlags() {
    var e2, t2;
    return (null === (e2 = this.config.bootstrap) || void 0 === e2 ? void 0 : e2.featureFlags) && Object.keys(null === (t2 = this.config.bootstrap) || void 0 === t2 ? void 0 : t2.featureFlags).length > 0 || false;
  }
  push(e2) {
    this._execute_array([e2]);
  }
  capture(e2, t2, i2) {
    var n2;
    if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
      if (!this.consent.isOptedOut()) if (!F(e2) && R(e2)) {
        if (this.config.opt_out_useragent_filter || !this._is_bot()) {
          var r2 = null != i2 && i2.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == r2 || !r2.isRateLimited) {
            this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.store_google || this.config.save_referrer) && this.persistence.set_initial_person_info();
            var s2 = /* @__PURE__ */ new Date(), o2 = (null == i2 ? void 0 : i2.timestamp) || s2, a2 = Ze(), l2 = { uuid: a2, event: e2, properties: this._calculate_event_properties(e2, t2 || {}, o2, a2) };
            r2 && (l2.properties.$lib_rate_limit_remaining_tokens = r2.remainingTokens), (null == i2 ? void 0 : i2.$set) && (l2.$set = null == i2 ? void 0 : i2.$set);
            var u2 = this._calculate_set_once_properties(null == i2 ? void 0 : i2.$set_once);
            u2 && (l2.$set_once = u2), (l2 = te(l2, null != i2 && i2._noTruncate ? null : this.config.properties_string_max_length)).timestamp = o2, F(null == i2 ? void 0 : i2.timestamp) || (l2.properties.$event_time_override_provided = true, l2.properties.$event_time_override_system_time = s2);
            var c2 = j(j({}, l2.properties.$set), l2.$set);
            if (P(c2) || this.setPersonPropertiesForFlags(c2), !O(this.config.before_send)) {
              var d2 = this._runBeforeSend(l2);
              if (!d2) return;
              l2 = d2;
            }
            this._internalEventEmitter.emit("eventCaptured", l2);
            var h2 = { method: "POST", url: null !== (n2 = null == i2 ? void 0 : i2._url) && void 0 !== n2 ? n2 : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), data: l2, compression: "best-available", batchKey: null == i2 ? void 0 : i2._batchKey };
            return !this.config.request_batching || i2 && (null == i2 || !i2._batchKey) || null != i2 && i2.send_instantly ? this._send_retriable_request(h2) : this._requestQueue.enqueue(h2), l2;
          }
          q.critical("This capture call is ignored due to client rate limiting.");
        }
      } else q.error("No event name provided to posthog.capture");
    } else q.uninitializedWarning("posthog.capture");
  }
  _addCaptureHook(e2) {
    return this.on("eventCaptured", (t2) => e2(t2.event, t2));
  }
  _calculate_event_properties(e2, t2, i2, n2) {
    if (i2 = i2 || /* @__PURE__ */ new Date(), !this.persistence || !this.sessionPersistence) return t2;
    var r2 = this.persistence.remove_event_timer(e2), s2 = j({}, t2);
    if (s2.token = this.config.token, this.config.__preview_experimental_cookieless_mode && (s2.$cklsh_mode = true), "$snapshot" === e2) {
      var o2 = j(j({}, this.persistence.properties()), this.sessionPersistence.properties());
      return s2.distinct_id = o2.distinct_id, (!R(s2.distinct_id) && !M(s2.distinct_id) || T(s2.distinct_id)) && q.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), s2;
    }
    var l2, u2 = fi.properties();
    if (this.sessionManager) {
      var { sessionId: c2, windowId: d2 } = this.sessionManager.checkAndGetSessionAndWindowId();
      s2.$session_id = c2, s2.$window_id = d2;
    }
    if (this.sessionRecording && (s2.$recording_status = this.sessionRecording.status), this.requestRouter.region === yr.CUSTOM && (s2.$lib_custom_api_host = this.config.api_host), this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e2 || "$pageleave" === e2 || "$autocapture" === e2)) {
      var _2 = this.sessionPropsManager.getSessionProps();
      s2 = K(s2, _2);
    }
    if (l2 = "$pageview" === e2 ? this.pageViewManager.doPageView(i2, n2) : "$pageleave" === e2 ? this.pageViewManager.doPageLeave(i2) : this.pageViewManager.doEvent(), s2 = K(s2, l2), "$pageview" === e2 && a && (s2.title = a.title), !F(r2)) {
      var p2 = i2.getTime() - r2;
      s2.$duration = parseFloat((p2 / 1e3).toFixed(3));
    }
    h && this.config.opt_out_useragent_filter && (s2.$browser_type = this._is_bot() ? "bot" : "browser"), (s2 = K({}, u2, this.persistence.properties(), this.sessionPersistence.properties(), s2)).$is_identified = this._isIdentified(), x(this.config.property_denylist) ? Y(this.config.property_denylist, function(e3) {
      delete s2[e3];
    }) : q.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
    var v2 = this.config.sanitize_properties;
    v2 && (q.error("sanitize_properties is deprecated. Use before_send instead"), s2 = v2(s2, e2));
    var g2 = this._hasPersonProcessing();
    return s2.$process_person_profile = g2, g2 && this._requirePersonProcessing("_calculate_event_properties"), s2;
  }
  _calculate_set_once_properties(e2) {
    if (!this.persistence || !this._hasPersonProcessing()) return e2;
    var t2 = K({}, this.persistence.get_initial_props(), e2 || {}), i2 = this.config.sanitize_properties;
    return i2 && (q.error("sanitize_properties is deprecated. Use before_send instead"), t2 = i2(t2, "$set_once")), P(t2) ? void 0 : t2;
  }
  register(e2, t2) {
    var i2;
    null === (i2 = this.persistence) || void 0 === i2 || i2.register(e2, t2);
  }
  register_once(e2, t2, i2) {
    var n2;
    null === (n2 = this.persistence) || void 0 === n2 || n2.register_once(e2, t2, i2);
  }
  register_for_session(e2) {
    var t2;
    null === (t2 = this.sessionPersistence) || void 0 === t2 || t2.register(e2);
  }
  unregister(e2) {
    var t2;
    null === (t2 = this.persistence) || void 0 === t2 || t2.unregister(e2);
  }
  unregister_for_session(e2) {
    var t2;
    null === (t2 = this.sessionPersistence) || void 0 === t2 || t2.unregister(e2);
  }
  _register_single(e2, t2) {
    this.register({ [e2]: t2 });
  }
  getFeatureFlag(e2, t2) {
    return this.featureFlags.getFeatureFlag(e2, t2);
  }
  getFeatureFlagPayload(e2) {
    var t2 = this.featureFlags.getFeatureFlagPayload(e2);
    try {
      return JSON.parse(t2);
    } catch (e3) {
      return t2;
    }
  }
  isFeatureEnabled(e2, t2) {
    return this.featureFlags.isFeatureEnabled(e2, t2);
  }
  reloadFeatureFlags() {
    this.featureFlags.reloadFeatureFlags();
  }
  updateEarlyAccessFeatureEnrollment(e2, t2) {
    this.featureFlags.updateEarlyAccessFeatureEnrollment(e2, t2);
  }
  getEarlyAccessFeatures(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return this.featureFlags.getEarlyAccessFeatures(e2, t2);
  }
  on(e2, t2) {
    return this._internalEventEmitter.on(e2, t2);
  }
  onFeatureFlags(e2) {
    return this.featureFlags.onFeatureFlags(e2);
  }
  onSessionId(e2) {
    var t2, i2;
    return null !== (t2 = null === (i2 = this.sessionManager) || void 0 === i2 ? void 0 : i2.onSessionId(e2)) && void 0 !== t2 ? t2 : () => {
    };
  }
  getSurveys(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getSurveys(e2, t2);
  }
  getActiveMatchingSurveys(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getActiveMatchingSurveys(e2, t2);
  }
  renderSurvey(e2, t2) {
    this.surveys.renderSurvey(e2, t2);
  }
  canRenderSurvey(e2) {
    this.surveys.canRenderSurvey(e2);
  }
  getNextSurveyStep(e2, t2, i2) {
    return this.surveys.getNextSurveyStep(e2, t2, i2);
  }
  identify(e2, t2, i2) {
    if (!this.__loaded || !this.persistence) return q.uninitializedWarning("posthog.identify");
    if (M(e2) && (e2 = e2.toString(), q.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e2) {
      if (["distinct_id", "distinctid"].includes(e2.toLowerCase())) q.critical('The string "'.concat(e2, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
      else if (this._requirePersonProcessing("posthog.identify")) {
        var n2 = this.get_distinct_id();
        if (this.register({ $user_id: e2 }), !this.get_property("$device_id")) {
          var r2 = n2;
          this.register_once({ $had_persisted_distinct_id: true, $device_id: r2 }, "");
        }
        e2 !== n2 && e2 !== this.get_property(se) && (this.unregister(se), this.register({ distinct_id: e2 }));
        var s2 = "anonymous" === (this.persistence.get_property(Te) || "anonymous");
        e2 !== n2 && s2 ? (this.persistence.set_property(Te, "identified"), this.setPersonPropertiesForFlags(t2 || {}, false), this.capture("$identify", { distinct_id: e2, $anon_distinct_id: n2 }, { $set: t2 || {}, $set_once: i2 || {} }), this.featureFlags.setAnonymousDistinctId(n2)) : (t2 || i2) && this.setPersonProperties(t2, i2), e2 !== n2 && (this.reloadFeatureFlags(), this.unregister(Re));
      }
    } else q.error("Unique user id has not been set in posthog.identify");
  }
  setPersonProperties(e2, t2) {
    (e2 || t2) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e2 || {}), this.capture("$set", { $set: e2 || {}, $set_once: t2 || {} }));
  }
  group(e2, t2, i2) {
    if (e2 && t2) {
      if (this._requirePersonProcessing("posthog.group")) {
        var n2 = this.getGroups();
        n2[e2] !== t2 && this.resetGroupPropertiesForFlags(e2), this.register({ $groups: j(j({}, n2), {}, { [e2]: t2 }) }), i2 && (this.capture("$groupidentify", { $group_type: e2, $group_key: t2, $group_set: i2 }), this.setGroupPropertiesForFlags({ [e2]: i2 })), n2[e2] === t2 || i2 || this.reloadFeatureFlags();
      }
    } else q.error("posthog.group requires a group type and group key");
  }
  resetGroups() {
    this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
  }
  setPersonPropertiesForFlags(e2) {
    var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this.featureFlags.setPersonPropertiesForFlags(e2, t2);
  }
  resetPersonPropertiesForFlags() {
    this.featureFlags.resetPersonPropertiesForFlags();
  }
  setGroupPropertiesForFlags(e2) {
    var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e2, t2);
  }
  resetGroupPropertiesForFlags(e2) {
    this.featureFlags.resetGroupPropertiesForFlags(e2);
  }
  reset(e2) {
    var t2, i2, n2, r2, s2;
    if (q.info("reset"), !this.__loaded) return q.uninitializedWarning("posthog.reset");
    var o2 = this.get_property("$device_id");
    if (this.consent.reset(), null === (t2 = this.persistence) || void 0 === t2 || t2.clear(), null === (i2 = this.sessionPersistence) || void 0 === i2 || i2.clear(), null === (n2 = this.surveys) || void 0 === n2 || n2.reset(), null === (r2 = this.persistence) || void 0 === r2 || r2.set_property(Te, "anonymous"), null === (s2 = this.sessionManager) || void 0 === s2 || s2.resetSessionId(), this.config.__preview_experimental_cookieless_mode) this.register_once({ distinct_id: qe, $device_id: null }, "");
    else {
      var a2 = this.config.get_device_id(Ze());
      this.register_once({ distinct_id: a2, $device_id: e2 ? a2 : o2 }, "");
    }
  }
  get_distinct_id() {
    return this.get_property("distinct_id");
  }
  getGroups() {
    return this.get_property("$groups") || {};
  }
  get_session_id() {
    var e2, t2;
    return null !== (e2 = null === (t2 = this.sessionManager) || void 0 === t2 ? void 0 : t2.checkAndGetSessionAndWindowId(true).sessionId) && void 0 !== e2 ? e2 : "";
  }
  get_session_replay_url(e2) {
    if (!this.sessionManager) return "";
    var { sessionId: t2, sessionStartTimestamp: i2 } = this.sessionManager.checkAndGetSessionAndWindowId(true), n2 = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(t2));
    if (null != e2 && e2.withTimestamp && i2) {
      var r2, s2 = null !== (r2 = e2.timestampLookBack) && void 0 !== r2 ? r2 : 10;
      if (!i2) return n2;
      var o2 = Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - i2) / 1e3) - s2, 0);
      n2 += "?t=".concat(o2);
    }
    return n2;
  }
  alias(e2, t2) {
    return e2 === this.get_property(re) ? (q.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (F(t2) && (t2 = this.get_distinct_id()), e2 !== t2 ? (this._register_single(se, e2), this.capture("$create_alias", { alias: e2, distinct_id: t2 })) : (q.warn("alias matches current distinct_id - skipping api call."), this.identify(e2), -1)) : void 0;
  }
  set_config(e2) {
    var t2, i2, n2, r2, s2 = j({}, this.config);
    C(e2) && (K(this.config, uo(e2)), null === (t2 = this.persistence) || void 0 === t2 || t2.update_config(this.config, s2), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new bi(j(j({}, this.config), {}, { persistence: "sessionStorage" })), at.is_supported() && "true" === at.get("ph_debug") && (this.config.debug = true), this.config.debug && (p.DEBUG = true, q.info("set_config", { config: e2, oldConfig: s2, newConfig: j({}, this.config) })), null === (i2 = this.sessionRecording) || void 0 === i2 || i2.startIfEnabledOrStop(), null === (n2 = this.autocapture) || void 0 === n2 || n2.startIfEnabled(), null === (r2 = this.heatmaps) || void 0 === r2 || r2.startIfEnabled(), this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence());
  }
  startSessionRecording(e2) {
    var t2 = true === e2, i2 = { sampling: t2 || !(null == e2 || !e2.sampling), linked_flag: t2 || !(null == e2 || !e2.linked_flag), url_trigger: t2 || !(null == e2 || !e2.url_trigger), event_trigger: t2 || !(null == e2 || !e2.event_trigger) };
    if (Object.values(i2).some(Boolean)) {
      var n2, r2, s2, o2, a2;
      if (null === (n2 = this.sessionManager) || void 0 === n2 || n2.checkAndGetSessionAndWindowId(), i2.sampling) null === (r2 = this.sessionRecording) || void 0 === r2 || r2.overrideSampling();
      if (i2.linked_flag) null === (s2 = this.sessionRecording) || void 0 === s2 || s2.overrideLinkedFlag();
      if (i2.url_trigger) null === (o2 = this.sessionRecording) || void 0 === o2 || o2.overrideTrigger("url");
      if (i2.event_trigger) null === (a2 = this.sessionRecording) || void 0 === a2 || a2.overrideTrigger("event");
    }
    this.set_config({ disable_session_recording: false });
  }
  stopSessionRecording() {
    this.set_config({ disable_session_recording: true });
  }
  sessionRecordingStarted() {
    var e2;
    return !(null === (e2 = this.sessionRecording) || void 0 === e2 || !e2.started);
  }
  captureException(e2, t2) {
    var i2, n2 = new Error("PostHog syntheticException"), r2 = I(null === (i2 = _.__PosthogExtensions__) || void 0 === i2 ? void 0 : i2.parseErrorAsProperties) ? _.__PosthogExtensions__.parseErrorAsProperties([e2.message, void 0, void 0, void 0, e2], { syntheticException: n2 }) : j({ $exception_level: "error", $exception_list: [{ type: e2.name, value: e2.message, mechanism: { handled: true, synthetic: false } }] }, t2);
    this.exceptions.sendExceptionEvent(r2);
  }
  loadToolbar(e2) {
    return this.toolbar.loadToolbar(e2);
  }
  get_property(e2) {
    var t2;
    return null === (t2 = this.persistence) || void 0 === t2 ? void 0 : t2.props[e2];
  }
  getSessionProperty(e2) {
    var t2;
    return null === (t2 = this.sessionPersistence) || void 0 === t2 ? void 0 : t2.props[e2];
  }
  toString() {
    var e2, t2 = null !== (e2 = this.config.name) && void 0 !== e2 ? e2 : oo;
    return t2 !== oo && (t2 = oo + "." + t2), t2;
  }
  _isIdentified() {
    var e2, t2;
    return "identified" === (null === (e2 = this.persistence) || void 0 === e2 ? void 0 : e2.get_property(Te)) || "identified" === (null === (t2 = this.sessionPersistence) || void 0 === t2 ? void 0 : t2.get_property(Te));
  }
  _hasPersonProcessing() {
    var e2, t2, i2, n2;
    return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && P(this.getGroups()) && (null === (e2 = this.persistence) || void 0 === e2 || null === (t2 = e2.props) || void 0 === t2 || !t2[se]) && (null === (i2 = this.persistence) || void 0 === i2 || null === (n2 = i2.props) || void 0 === n2 || !n2[De]));
  }
  _shouldCapturePageleave() {
    return true === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview;
  }
  createPersonProfile() {
    this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {});
  }
  _requirePersonProcessing(e2) {
    return "never" === this.config.person_profiles ? (q.error(e2 + ' was called, but process_person is set to "never". This call will be ignored.'), false) : (this._register_single(De, true), true);
  }
  _sync_opt_out_with_persistence() {
    var e2, t2, i2, n2, r2 = this.consent.isOptedOut(), s2 = this.config.opt_out_persistence_by_default, o2 = this.config.disable_persistence || r2 && !!s2;
    (null === (e2 = this.persistence) || void 0 === e2 ? void 0 : e2.disabled) !== o2 && (null === (i2 = this.persistence) || void 0 === i2 || i2.set_disabled(o2));
    (null === (t2 = this.sessionPersistence) || void 0 === t2 ? void 0 : t2.disabled) !== o2 && (null === (n2 = this.sessionPersistence) || void 0 === n2 || n2.set_disabled(o2));
  }
  opt_in_capturing(e2) {
    var t2;
    (this.consent.optInOut(true), this._sync_opt_out_with_persistence(), F(null == e2 ? void 0 : e2.captureEventName) || null != e2 && e2.captureEventName) && this.capture(null !== (t2 = null == e2 ? void 0 : e2.captureEventName) && void 0 !== t2 ? t2 : "$opt_in", null == e2 ? void 0 : e2.captureProperties, { send_instantly: true });
    this.config.capture_pageview && this._captureInitialPageview();
  }
  opt_out_capturing() {
    this.consent.optInOut(false), this._sync_opt_out_with_persistence();
  }
  has_opted_in_capturing() {
    return this.consent.isOptedIn();
  }
  has_opted_out_capturing() {
    return this.consent.isOptedOut();
  }
  clear_opt_in_out_capturing() {
    this.consent.reset(), this._sync_opt_out_with_persistence();
  }
  _is_bot() {
    return o ? Cs(o, this.config.custom_blocked_useragents) : void 0;
  }
  _captureInitialPageview() {
    a && !this._initialPageviewCaptured && (this._initialPageviewCaptured = true, this.capture("$pageview", { title: a.title }, { send_instantly: true }));
  }
  debug(e2) {
    false === e2 ? (null == t || t.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: false })) : (null == t || t.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({ debug: true }));
  }
  _runBeforeSend(e2) {
    if (O(this.config.before_send)) return e2;
    var t2 = x(this.config.before_send) ? this.config.before_send : [this.config.before_send], i2 = e2;
    for (var n2 of t2) {
      if (i2 = n2(i2), O(i2)) {
        var r2 = "Event '".concat(e2.event, "' was rejected in beforeSend function");
        return D(e2.event) ? q.warn("".concat(r2, ". This can cause unexpected behavior.")) : q.info(r2), null;
      }
      i2.properties && !P(i2.properties) || q.warn("Event '".concat(e2.event, "' has no properties after beforeSend function, this is likely an error."));
    }
    return i2;
  }
  getPageViewId() {
    var e2;
    return null === (e2 = this.pageViewManager._currentPageview) || void 0 === e2 ? void 0 : e2.pageViewId;
  }
};
!function(e2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) e2.prototype[t2[i2]] = Z(e2.prototype[t2[i2]]);
}(ho, ["identify"]);
var _o;
var po = (_o = ro[oo] = new ho(), function() {
  function e2() {
    e2.done || (e2.done = true, ao = false, Y(ro, function(e3) {
      e3._dom_loaded();
    }));
  }
  null != a && a.addEventListener && ("complete" === a.readyState ? e2() : a.addEventListener("DOMContentLoaded", e2, false)), t && ie(t, "load", e2, true);
}(), _o);

// src/storage.ts
var DEFAULT_SETTINGS = {
  enabled: false,
  styles: {
    background: "#000000",
    color: "#ffffff",
    outline: "#E91E63",
    outlineWidth: "1px",
    outlineStyle: "solid",
    highlightScrollbars: true,
    excludeSelectors: []
  }
};

// src/unicorn.ts
var UnicornRevealer = class {
  constructor(styles = DEFAULT_SETTINGS.styles) {
    this.styles = styles;
    this.id = "unicornSparkle";
    this.tooltipElement = null;
    this.styleElement = null;
    this.injectOrRemove();
  }
  injectOrRemove() {
    if (this.styleElement) {
      this.remove();
    } else {
      this.inject();
    }
  }
  async inject() {
    const { excludeSelectors = [] } = this.styles;
    const mainSelector = excludeSelectors.length ? `*:not(${excludeSelectors.join("):not(")}):not(#${this.id}):not(#${this.id} *)` : `*:not(#${this.id}):not(#${this.id} *)`;
    const css = `
      ${mainSelector} {
        background: ${this.styles.background} !important;
        color: ${this.styles.color} !important;
        outline: ${this.styles.outlineWidth} ${this.styles.outlineStyle} ${this.styles.outline} !important;
      }

      .unicorn-tooltip {
        position: fixed;
        background: ${this.styles.background};
        color: ${this.styles.color};
        border: 1px solid ${this.styles.outline};
        padding: 8px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 2147483647;
      }
    `;
    const style = document.createElement("style");
    style.id = this.id;
    style.textContent = css;
    document.body.appendChild(style);
    this.styleElement = style;
    this.addElementInspection();
    (void 0)("inject");
  }
  remove() {
    if (this.styleElement && document.body.contains(this.styleElement)) {
      document.body.removeChild(this.styleElement);
      this.styleElement = null;
    }
    if (this.tooltipElement && document.body.contains(this.tooltipElement)) {
      document.body.removeChild(this.tooltipElement);
      this.tooltipElement = null;
    }
    (void 0)("remove");
  }
  addElementInspection() {
    document.addEventListener("mouseover", this.handleMouseOver.bind(this));
    document.addEventListener("mouseout", this.handleMouseOut.bind(this));
  }
  handleMouseOver(e2) {
    const target = e2.target;
    if (!target || target.id === this.id || target.closest(`#${this.id}`)) return;
    this.showTooltip(target, e2);
  }
  handleMouseOut() {
    this.hideTooltip();
  }
  showTooltip(element, event) {
    const computed = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    const info = {
      tag: element.tagName.toLowerCase(),
      id: element.id ? `#${element.id}` : "",
      classes: Array.from(element.classList).map((c2) => `.${c2}`).join(""),
      dimensions: `${Math.round(rect.width)} \xD7 ${Math.round(rect.height)}`,
      margin: `${computed.marginTop} ${computed.marginRight} ${computed.marginBottom} ${computed.marginLeft}`,
      padding: `${computed.paddingTop} ${computed.paddingRight} ${computed.paddingBottom} ${computed.paddingLeft}`
    };
    this.tooltipElement = this.createTooltipElement(info);
    this.positionTooltip(this.tooltipElement, event);
    document.body.appendChild(this.tooltipElement);
  }
  createTooltipElement(info) {
    const tooltip = document.createElement("div");
    tooltip.className = "unicorn-tooltip";
    const content = Object.entries(info).filter(([_2, value]) => value).map(([key, value]) => `<strong>${key}:</strong> ${value}`).join("<br>");
    tooltip.innerHTML = content;
    return tooltip;
  }
  positionTooltip(tooltip, event) {
    const offset = 15;
    let x2 = event.pageX + offset;
    let y2 = event.pageY + offset;
    const rect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    if (x2 + rect.width > viewportWidth) {
      x2 = event.pageX - rect.width - offset;
    }
    if (y2 + rect.height > viewportHeight) {
      y2 = event.pageY - rect.height - offset;
    }
    tooltip.style.left = `${x2}px`;
    tooltip.style.top = `${y2}px`;
  }
  hideTooltip() {
    if (this.tooltipElement) {
      this.tooltipElement.remove();
      this.tooltipElement = null;
    }
  }
};
var revealer = null;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  try {
    if (message.type === "activate" && message.settings) {
      if (revealer) {
        revealer.remove();
      }
      revealer = new UnicornRevealer(message.settings.styles);
      revealer.inject().then(() => sendResponse({ success: true }));
    } else if (message.type === "deactivate") {
      if (revealer) {
        revealer.remove();
        (void 0)("remove");
        revealer = null;
      }
      sendResponse({ success: true });
    } else if (message.type === "toggle") {
      if (revealer) {
        revealer.remove();
        (void 0)("remove");
        revealer = null;
        sendResponse({ success: true });
      } else {
        chrome.runtime.sendMessage({ type: "getSettings" }, (response) => {
          if (response?.settings) {
            revealer = new UnicornRevealer(response.settings.styles);
            revealer.inject().then(() => sendResponse({ success: true }));
          }
        });
      }
    }
  } catch (error) {
    console.error("Error in message handler:", error);
    sendResponse({ success: false, error: error.message });
  }
  return true;
});
