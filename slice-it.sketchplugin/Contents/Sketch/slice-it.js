var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/slice-it.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@skpm/child_process/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@skpm/child_process/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.exec = __webpack_require__(/*! ./lib/exec */ "./node_modules/@skpm/child_process/lib/exec.js")
module.exports.execFile = __webpack_require__(/*! ./lib/execFile */ "./node_modules/@skpm/child_process/lib/execFile.js")
module.exports.spawn = __webpack_require__(/*! ./lib/spawn */ "./node_modules/@skpm/child_process/lib/spawn.js")
module.exports.spawnSync = __webpack_require__(/*! ./lib/spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")
module.exports.execFileSync = __webpack_require__(/*! ./lib/execFileSync */ "./node_modules/@skpm/child_process/lib/execFileSync.js")
module.exports.execSync = __webpack_require__(/*! ./lib/execSync */ "./node_modules/@skpm/child_process/lib/execSync.js")


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/exec.js":
/*!******************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var execFile = __webpack_require__(/*! ./execFile */ "./node_modules/@skpm/child_process/lib/execFile.js")

function normalizeExecArgs(command, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = undefined
  }

  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options)
  options.shell = typeof options.shell === 'string' ? options.shell : true

  return {
    file: command,
    options: options,
    callback: callback
  }
}

module.exports = function exec(command, options, callback) {
  var opts = normalizeExecArgs(command, options, callback)
  return execFile(opts.file, opts.options, opts.callback)
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execFile.js":
/*!**********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execFile.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(clearTimeout, setTimeout) {/* globals NSMutableData, NSData */
var spawn = __webpack_require__(/*! ./spawn */ "./node_modules/@skpm/child_process/lib/spawn.js")
var handleData = __webpack_require__(/*! ./handleData */ "./node_modules/@skpm/child_process/lib/handleData.js")

function validateTimeout(timeout) {
  if (timeout != null && !(Number.isInteger(timeout) && timeout >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.timeout')
  }
}


function validateMaxBuffer(maxBuffer) {
  if (maxBuffer != null && !(typeof maxBuffer === 'number' && maxBuffer >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.maxBuffer')
  }
}

function concatData(prev, data) { prev.appendData(data); return prev }

module.exports = function execFile(file, args, options, callback) {
  var defaultOptions = {
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: undefined,
    env: undefined,
    shell: false
  }

  if (typeof args === 'function') {
    // function (file, callback)
    callback = args
    args = []
    options = defaultOptions
  } else if (typeof args === 'object' && !Array.isArray(args)) {
    // function (file, options, callback)
    callback = options
    options = Object.assign(defaultOptions, args)
    args = []
  } else {
    // function (file, args, options, callback)
    options = Object.assign(defaultOptions, options)
  }

  // Validate the timeout, if present.
  validateTimeout(options.timeout)

  // Validate maxBuffer, if present.
  validateMaxBuffer(options.maxBuffer)

  var child = spawn(file, args, {
    cwd: options.cwd,
    env: options.env,
    gid: options.gid,
    uid: options.uid,
    shell: options.shell
  })

  var encoding = options.encoding
  var _stdout = []
  var _stderr = []

  var stdoutLen = 0
  var stderrLen = 0
  var killed = false
  var exited = false
  var timeoutId

  var ex = null

  var cmd = file

  function exithandler(code, signal) {
    if (exited) return
    exited = true

    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }

    if (!callback) return

    // merge chunks
    var stdout = handleData(
      NSData.dataWithData(
        _stdout.reduce(concatData, NSMutableData.data())
      ),
      encoding
    )
    var stderr = handleData(
      NSData.dataWithData(
        _stderr.reduce(concatData, NSMutableData.data())
      ),
      encoding
    )

    if (!ex && code === 0 && signal === null) {
      callback(null, stdout, stderr)
      return
    }

    if (args.length !== 0) {
      cmd += ' ' + args.join(' ')
    }

    if (!ex) {
      ex = new Error('Command failed: ' + cmd + '\n' + stderr)
      ex.killed = child.killed || killed
      ex.code = code
      ex.signal = signal
    }

    ex.cmd = cmd
    callback(ex, stdout, stderr)
  }

  function errorhandler(e) {
    ex = e

    exithandler()
  }

  function kill() {
    killed = true
    try {
      child.kill(options.killSignal)
    } catch (e) {
      ex = e
      exithandler()
    }
  }

  if (options.timeout > 0) {
    timeoutId = setTimeout(function delayedKill() {
      kill()
      timeoutId = null
    }, options.timeout)
  }

  if (child.stdout) {
    child.stdout.on('data', function onChildStdout(chunk) {
      stdoutLen += chunk.length()

      if (stdoutLen > options.maxBuffer) {
        ex = new Error('ERR_CHILD_PROCESS_STDIO_MAXBUFFER stdout')
        kill()
      } else {
        _stdout.push(chunk)
      }
    })
  }

  if (child.stderr) {
    child.stderr.on('data', function onChildStderr(chunk) {
      stderrLen += chunk.length()

      if (stderrLen > options.maxBuffer) {
        ex = new Error('ERR_CHILD_PROCESS_STDIO_MAXBUFFER stderr')
        kill()
      } else {
        _stderr.push(chunk)
      }
    })
  }

  child.addListener('close', exithandler)
  child.addListener('error', errorhandler)

  return child
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/timers/timeout.js */ "./node_modules/@skpm/timers/timeout.js")["clearTimeout"], __webpack_require__(/*! ./node_modules/@skpm/timers/timeout.js */ "./node_modules/@skpm/timers/timeout.js")["setTimeout"]))

/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execFileSync.js":
/*!**************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execFileSync.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var spawnSync = __webpack_require__(/*! ./spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")

function validateTimeout(timeout) {
  if (timeout != null && !(Number.isInteger(timeout) && timeout >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.timeout')
  }
}


function validateMaxBuffer(maxBuffer) {
  if (maxBuffer != null && !(typeof maxBuffer === 'number' && maxBuffer >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.maxBuffer')
  }
}

module.exports = function execFileSync(file, args, options) {
  var defaultOptions = {
    encoding: 'buffer',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: null,
    env: null,
    shell: false
  }

  if (typeof args === 'object' && !Array.isArray(args)) {
    // function (file, options)
    options = Object.assign(defaultOptions, args)
    args = []
  } else {
    // function (file)
    options = Object.assign(defaultOptions, options || {})
  }

  // Validate the timeout, if present.
  validateTimeout(options.timeout)

  // Validate maxBuffer, if present.
  validateMaxBuffer(options.maxBuffer)

  var child = spawnSync(file, args, {
    cwd: options.cwd,
    env: options.env,
    gid: options.gid,
    uid: options.uid,
    shell: options.shell,
    encoding: options.encoding
  })

  if (child.status !== 0) {
    var error = new Error('Failed to run: ' + String(child.stderr))
    error.pid = child.pid
    error.status = child.status
    error.stdout = child.stdout
    error.stderr = child.stderr
    throw error
  }

  return child.stdout
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execSync.js":
/*!**********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execSync.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var execFileSync = __webpack_require__(/*! ./execFileSync */ "./node_modules/@skpm/child_process/lib/execFileSync.js")

function normalizeExecArgs(command, options) {
  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options)
  options.shell = typeof options.shell === 'string' ? options.shell : true

  return {
    file: command,
    options: options
  }
}

module.exports = function execSync(command, options) {
  var opts = normalizeExecArgs(command, options)
  return execFileSync(opts.file, opts.options)
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/handleData.js":
/*!************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/handleData.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(/*! buffer */ "buffer").Buffer

function handleBuffer(buffer, encoding) {
  if (encoding === 'buffer') {
    return buffer
  }
  if (encoding === 'NSData') {
    return buffer.toNSData()
  }
  return buffer.toString(encoding)
}

module.exports = function handleData(data, encoding) {
  var buffer = Buffer.from(data)

  return handleBuffer(buffer, encoding)
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function normalizeSpawnArguments(file, args, options) {
  if (typeof file !== 'string' || file.length === 0) {
    throw new Error('ERR_INVALID_ARG_TYPE')
  }

  if (Array.isArray(args)) {
    args = args.slice(0)
  } else if (args !== undefined && (args === null || typeof args !== 'object')) {
    throw new Error('ERR_INVALID_ARG_TYPE args')
  } else {
    options = args
    args = []
  }

  if (options === undefined) {
    options = {}
  } else if (options === null || typeof options !== 'object') {
    throw new Error('ERR_INVALID_ARG_TYPE options')
  }

  // Validate the cwd, if present.
  if (options.cwd != null && typeof options.cwd !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.cwd')
  }

  // Validate detached, if present.
  if (options.detached != null && typeof options.detached !== 'boolean') {
    throw new Error('ERR_INVALID_ARG_TYPE options.detached')
  }

  // Validate the uid, if present.
  if (options.uid != null && !Number.isInteger(options.uid)) {
    throw new Error('ERR_INVALID_ARG_TYPE options.uid')
  }

  // Validate the gid, if present.
  if (options.gid != null && !Number.isInteger(options.gid)) {
    throw new Error('ERR_INVALID_ARG_TYPE options.gid')
  }

  // Validate the shell, if present.
  if (options.shell != null
    && typeof options.shell !== 'boolean'
    && typeof options.shell !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.shell')
  }

  // Validate argv0, if present.
  if (options.argv0 != null && typeof options.argv0 !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.argv0')
  }

  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options)

  if (options.shell) {
    var command = [file].concat(args).join(' ')

    if (typeof options.shell === 'string') {
      file = options.shell
    } else {
      file = '/bin/bash'
    }
    args = ['-l', '-c', command]
  }

  if (typeof options.argv0 === 'string') {
    args.unshift(options.argv0)
  }

  var env = options.env

  return {
    file: file,
    args: args,
    options: options,
    envPairs: env
  }
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/spawn.js":
/*!*******************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/spawn.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals NSPipe, NSTask, NSArray, NSString, coscript, NSFileHandleDataAvailableNotification,
  NSNotificationCenter, NSSelectorFromString, NSDictionary, NSTaskDidTerminateNotification */
var ObjCClass = __webpack_require__(/*! cocoascript-class */ "./node_modules/cocoascript-class/lib/index.js").default
var EventEmitter = __webpack_require__(/*! events */ "events")
var spawnSync = __webpack_require__(/*! ./spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")
var handleData = __webpack_require__(/*! ./handleData */ "./node_modules/@skpm/child_process/lib/handleData.js")
var normalizeSpawnArguments = __webpack_require__(/*! ./normalizeSpawnArguments */ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js")
// We create one ObjC class for ourselves here
var ChildProcess

function onCleanup(child) {
  return function cleanup() {
    NSNotificationCenter.defaultCenter().removeObserver(child)
  }
}

function spawn(_command, _args, _options) {
  var opts = normalizeSpawnArguments(_command, _args, _options)

  var result = new EventEmitter()

  if (opts.file[0] !== '.' && opts.file[0] !== '/' && opts.file[0] !== '~') {
    // means that someone refered to an executable that might be in the path, let's find it
    var whichChild = spawnSync('/bin/bash', ['-l', '-c', 'which ' + opts.file], { encoding: 'utf8' })
    var resolvedCommand = String(whichChild.stdout || '').trim()
    if (whichChild.err || !resolvedCommand.length) {
      result.stderr = new EventEmitter()
      result.stdout = new EventEmitter()

      result.pid = '-1'

      result.stderr.setEncoding = function setEncoding(encoding) {
        result.stderr.encoding = encoding
      }
      result.stdout.setEncoding = function setEncoding(encoding) {
        result.stdout.encoding = encoding
      }
      if (!resolvedCommand.length) {
        result.emit('error', new Error(String(opts.file) + ' ENOENT'))
      } else {
        result.emit('error', whichChild.err)
      }
      return result
    }
    return spawn(resolvedCommand, _args, _options)
  }

  var options = opts.options

  result.stderr = new EventEmitter()
  result.stdout = new EventEmitter()

  result.stderr.encoding = options.encoding || 'utf8'
  result.stdout.encoding = options.encoding || 'utf8'

  result.stderr.setEncoding = function setEncoding(encoding) {
    result.stderr.encoding = encoding
  }
  result.stdout.setEncoding = function setEncoding(encoding) {
    result.stdout.encoding = encoding
  }

  if (!ChildProcess) {
    ChildProcess = ObjCClass({
      classname: 'ChildProcess',
      listeners: null,
      fileHandle: null,
      errFileHandle: null,
      task: null,

      spawn: function spawnMethod(args, listeners) {
        this.listeners = NSDictionary.dictionaryWithDictionary(listeners)
        var pipe = NSPipe.pipe()
        var errPipe = NSPipe.pipe()

        this.fileHandle = pipe.fileHandleForReading()
        this.fileHandle.waitForDataInBackgroundAndNotify()

        this.errFileHandle = pipe.fileHandleForReading()
        this.errFileHandle.waitForDataInBackgroundAndNotify()

        this.task = NSTask.alloc().init()
        this.task.setLaunchPath(NSString.stringWithString(opts.file).stringByExpandingTildeInPath())
        this.task.arguments = NSArray.arrayWithArray(args.args || [])
        if (args.envPairs) {
          this.task.environment = args.envPairs
        }
        if (args.cwd) {
          this.task.setCurrentDirectoryPath(
            NSString.stringWithString(args.cwd).stringByExpandingTildeInPath()
          )
        }

        this.task.setStandardOutput(pipe)
        this.task.setStandardError(errPipe)

        this.task.launch()
      },

      kill: function kill() {
        if (this.task) {
          this.task.terminate()
        }
      },

      'readLine:': function readLine(fileHandle) {
        var fileDescriptor = fileHandle.object().fileDescriptor()
        if (fileDescriptor != this.fileHandle.fileDescriptor()
          && fileDescriptor != this.errFileHandle.fileDescriptor()) {
          return
        }
        var data = fileHandle.object().availableData()
        if (!data) {
          return
        }

        if (fileDescriptor == this.fileHandle.fileDescriptor()) {
          this.listeners.onStdout(data)
          if (this.task) {
            this.fileHandle.waitForDataInBackgroundAndNotify()
          }
        } else if (fileDescriptor == this.errFileHandle.fileDescriptor()) {
          this.listeners.onStderr(data)
          if (this.task) {
            this.errFileHandle.waitForDataInBackgroundAndNotify()
          }
        }
      },

      'taskTerminated:': function taskTerminated(task) {
        if (task.object().processIdentifier() == this.task.processIdentifier()) {
          this.listeners.onEnd(Number(this.task.terminationStatus()), null)
        }
      }
    })
  }

  var child

  try {
    child = ChildProcess.new()
  } catch (err) {
    result.emit('error', err)
    return result
  }

  result.killed = false
  var fiber
  if (coscript.createFiber) {
    fiber = coscript.createFiber()
    fiber.onCleanup(onCleanup(child))
  } else {
    coscript.shouldKeepAround = true
  }

  function cleanupAsync() {
    if (fiber) {
      fiber.cleanup()
    } else {
      NSNotificationCenter.defaultCenter().removeObserver(child)
      coscript.shouldKeepAround = false
    }
  }

  function onStdout(data) {
    if (data && data.length()) {
      result.stdout.emit('data', handleData(data, result.stdout.encoding))
    }
  }
  function onStderr(data) {
    if (data && data.length()) {
      result.stderr.emit('data', handleData(data, result.stderr.encoding))
    }
  }

  child.spawn({
    file: opts.file,
    args: opts.args,
    cwd: options.cwd,
    detached: !!options.detached,
    envPairs: opts.envPairs,
    stdio: options.stdio,
    uid: options.uid,
    gid: options.gid
  }, {
    onStdout: onStdout,
    onStderr: onStderr,
    onEnd: function onEnd(code, signal) {
      if (!result.killed) {
        // flush remaining data
        onStdout(child.fileHandle.readDataToEndOfFile())
        onStderr(child.errFileHandle.readDataToEndOfFile())

        result.emit('close', code, signal)
        result.stderr.emit('close')
        result.stdout.emit('close')

        cleanupAsync()
      }
    }
  })

  NSNotificationCenter.defaultCenter().addObserver_selector_name_object(
    child,
    NSSelectorFromString('readLine:'),
    NSFileHandleDataAvailableNotification,
    null
  )

  NSNotificationCenter.defaultCenter().addObserver_selector_name_object(
    child,
    NSSelectorFromString('taskTerminated:'),
    NSTaskDidTerminateNotification,
    null
  )

  result.kill = function kill(signal) {
    if (!result.killed) {
      result.killed = true
      result.emit('close', null, signal)
      child.kill()
      cleanupAsync()
    }
  }

  result.pid = String(child.task.processIdentifier())

  return result
}

module.exports = spawn


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/spawnSync.js":
/*!***********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/spawnSync.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals NSPipe, NSTask, NSArray, NSString */
var handleData = __webpack_require__(/*! ./handleData */ "./node_modules/@skpm/child_process/lib/handleData.js")
var normalizeSpawnArguments = __webpack_require__(/*! ./normalizeSpawnArguments */ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js")

function spawnSync(_command, _args, _options) {
  var opts = normalizeSpawnArguments(_command, _args, _options)

  if (opts.file[0] !== '.' && opts.file[0] !== '/' && opts.file[0] !== '~') {
    // means that someone refered to an executable that might be in the path, let's find it
    var whichChild = spawnSync(
      '/bin/bash',
      ['-l', '-c', 'which ' + opts.file],
      { encoding: 'utf8' }
    )
    if (whichChild.err) {
      return whichChild
    }
    var resolvedCommand = String(whichChild.stdout).trim()
    if (!resolvedCommand.length) {
      return {
        err: new Error(String(opts.file) + ' ENOENT')
      }
    }
    return spawnSync(resolvedCommand, _args, _options)
  }

  var options = opts.options

  var pipe = NSPipe.pipe()
  var errPipe = NSPipe.pipe()

  try {
    var task = NSTask.alloc().init()
    task.setLaunchPath(NSString.stringWithString(opts.file).stringByExpandingTildeInPath())
    task.arguments = NSArray.arrayWithArray(opts.args || [])
    if (opts.envPairs) {
      task.environment = opts.envPairs
    }

    if (options.cwd) {
      task.setCurrentDirectoryPath(
        NSString.stringWithString(options.cwd).stringByExpandingTildeInPath()
      )
    }

    task.setStandardOutput(pipe)
    task.setStandardError(errPipe)

    task.launch()
    task.waitUntilExit()

    return {
      pid: String(task.processIdentifier()),
      status: Number(task.terminationStatus()),
      get stdout() {
        var data = pipe.fileHandleForReading().readDataToEndOfFile()
        return handleData(data, options.encoding || 'buffer')
      },
      get stderr() {
        var data = errPipe.fileHandleForReading().readDataToEndOfFile()
        return handleData(data, options.encoding || 'buffer')
      }
    }
  } catch (err) {
    return {
      err: err
    }
  }
}

module.exports = spawnSync


/***/ }),

/***/ "./node_modules/@skpm/fs/index.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: async. Should probably be done with NSFileHandle and some notifications
// TODO: file descriptor. Needs to be done with NSFileHandle
var Buffer = __webpack_require__(/*! buffer */ "buffer").Buffer

function encodingFromOptions(options, defaultValue) {
  return options && options.encoding
    ? String(options.encoding)
    : (
      options
        ? String(options)
        : defaultValue
    )
}

module.exports.constants = {
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1
}

module.exports.accessSync = function(path, mode) {
  mode = mode | 0
  var fileManager = NSFileManager.defaultManager()

  switch (mode) {
    case 0:
      canAccess = module.exports.existsSync(path)
      break
    case 1:
      canAccess = Boolean(Number(fileManager.isExecutableFileAtPath(path)))
      break
    case 2:
      canAccess = Boolean(Number(fileManager.isWritableFileAtPath(path)))
      break
    case 3:
      canAccess = Boolean(Number(fileManager.isExecutableFileAtPath(path))) && Boolean(Number(fileManager.isWritableFileAtPath(path)))
      break
    case 4:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path)))
      break
    case 5:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path))) && Boolean(Number(fileManager.isExecutableFileAtPath(path)))
      break
    case 6:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path))) && Boolean(Number(fileManager.isWritableFileAtPath(path)))
      break
    case 7:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path))) && Boolean(Number(fileManager.isWritableFileAtPath(path))) && Boolean(Number(fileManager.isExecutableFileAtPath(path)))
      break
  }

  if (!canAccess) {
    throw new Error('Can\'t access ' + String(path))
  }
}

module.exports.appendFileSync = function(file, data, options) {
  if (!module.exports.existsSync(file)) {
    return module.exports.writeFileSync(file, data, options)
  }

  var handle = NSFileHandle.fileHandleForWritingAtPath(file)
  handle.seekToEndOfFile()

  var encoding = encodingFromOptions(options, 'utf8')

  var nsdata = Buffer.from(data, encoding === 'NSData' || encoding === 'buffer' ? undefined : encoding).toNSData()

  handle.writeData(nsdata)
}

module.exports.chmodSync = function(path, mode) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.setAttributes_ofItemAtPath_error({
    NSFilePosixPermissions: mode
  }, path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.copyFileSync = function(path, dest, flags) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.copyItemAtPath_toPath_error(path, dest, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.existsSync = function(path) {
  var fileManager = NSFileManager.defaultManager()
  return Boolean(Number(fileManager.fileExistsAtPath(path)))
}

module.exports.linkSync = function(existingPath, newPath) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.linkItemAtPath_toPath_error(existingPath, newPath, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.mkdirSync = function(path, mode) {
  mode = mode || 0o777
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(path, false, {
    NSFilePosixPermissions: mode
  }, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.mkdtempSync = function(path) {
  function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  var tempPath = path + makeid()
  module.exports.mkdirSync(tempPath)
  return tempPath
}

module.exports.readdirSync = function(path) {
  var fileManager = NSFileManager.defaultManager()
  var paths = fileManager.subpathsAtPath(path)
  var arr = []
  for (var i = 0; i < paths.length; i++) {
    arr.push(String(paths[i]))
  }
  return arr
}

module.exports.readFileSync = function(path, options) {
  var encoding = encodingFromOptions(options, 'buffer')
  var fileManager = NSFileManager.defaultManager()
  var data = fileManager.contentsAtPath(path)
  var buffer = Buffer.from(data)

  if (encoding === 'buffer') {
    return buffer
  } else if (encoding === 'NSData') {
    return buffer.toNSData()
  } else {
    return buffer.toString(encoding)
  }
}

module.exports.readlinkSync = function(path) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  var result = fileManager.destinationOfSymbolicLinkAtPath_error(path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }

  return String(result)
}

module.exports.realpathSync = function(path) {
  return String(NSString.stringByResolvingSymlinksInPath(path))
}

module.exports.renameSync = function(oldPath, newPath) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.moveItemAtPath_toPath_error(oldPath, newPath, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.rmdirSync = function(path) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.removeItemAtPath_error(path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.statSync = function(path) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  var result = fileManager.attributesOfItemAtPath_error(path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }

  return {
    dev: String(result.NSFileDeviceIdentifier),
    // ino: 48064969, The file system specific "Inode" number for the file.
    mode: result.NSFileType | result.NSFilePosixPermissions,
    nlink: Number(result.NSFileReferenceCount),
    uid: String(result.NSFileOwnerAccountID),
    gid: String(result.NSFileGroupOwnerAccountID),
    // rdev: 0, A numeric device identifier if the file is considered "special".
    size: Number(result.NSFileSize),
    // blksize: 4096, The file system block size for i/o operations.
    // blocks: 8, The number of blocks allocated for this file.
    atimeMs: Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    mtimeMs: Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    ctimeMs: Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    birthtimeMs: Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000,
    atime: new Date(Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5), // the 0.5 comes from the node source. Not sure why it's added but in doubt...
    mtime: new Date(Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5),
    ctime: new Date(Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5),
    birthtime: new Date(Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000 + 0.5),
    isBlockDevice: function() { return result.NSFileType === NSFileTypeBlockSpecial },
    isCharacterDevice: function() { return result.NSFileType === NSFileTypeCharacterSpecial },
    isDirectory: function() { return result.NSFileType === NSFileTypeDirectory },
    isFIFO: function() { return false },
    isFile: function() { return result.NSFileType === NSFileTypeRegular },
    isSocket: function() { return result.NSFileType === NSFileTypeSocket },
    isSymbolicLink: function() { return result.NSFileType === NSFileTypeSymbolicLink },
  }
}

module.exports.symlinkSync = function(target, path) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  var result = fileManager.createSymbolicLinkAtPath_withDestinationPath_error(path, target, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.truncateSync = function(path, len) {
  var hFile = NSFileHandle.fileHandleForUpdatingAtPath(sFilePath)
  hFile.truncateFileAtOffset(len || 0)
  hFile.closeFile()
}

module.exports.unlinkSync = function(path) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  var result = fileManager.removeItemAtPath_error(path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.utimesSync = function(path, aTime, mTime) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  var result = fileManager.setAttributes_ofItemAtPath_error({
    NSFileModificationDate: aTime
  }, path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.writeFileSync = function(path, data, options) {
  var encoding = encodingFromOptions(options, 'utf8')

  var nsdata = Buffer.from(
    data, encoding === 'NSData' || encoding === 'buffer' ? undefined : encoding
  ).toNSData()

  nsdata.writeToFile_atomically(path, true)
}


/***/ }),

/***/ "./node_modules/@skpm/path/index.js":
/*!******************************************!*\
  !*** ./node_modules/@skpm/path/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var sketchSpecifics = __webpack_require__(/*! ./sketch-specifics */ "./node_modules/@skpm/path/sketch-specifics.js")

// we only expose the posix implementation since Sketch only runs on macOS

var CHAR_FORWARD_SLASH = 47
var CHAR_DOT = 46

// Resolves . and .. elements in a path with directory names
function normalizeString(path, allowAboveRoot) {
  var res = ''
  var lastSegmentLength = 0
  var lastSlash = -1
  var dots = 0
  var code
  for (var i = 0; i <= path.length; i += 1) {
    if (i < path.length) code = path.charCodeAt(i)
    else if (code === CHAR_FORWARD_SLASH) break
    else code = CHAR_FORWARD_SLASH
    if (code === CHAR_FORWARD_SLASH) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (
          res.length < 2 ||
          lastSegmentLength !== 2 ||
          res.charCodeAt(res.length - 1) !== CHAR_DOT ||
          res.charCodeAt(res.length - 2) !== CHAR_DOT
        ) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/')
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = ''
                lastSegmentLength = 0
              } else {
                res = res.slice(0, lastSlashIndex)
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/')
              }
              lastSlash = i
              dots = 0
              continue
            }
          } else if (res.length === 2 || res.length === 1) {
            res = ''
            lastSegmentLength = 0
            lastSlash = i
            dots = 0
            continue
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0) res += '/..'
          else res = '..'
          lastSegmentLength = 2
        }
      } else {
        if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i)
        else res = path.slice(lastSlash + 1, i)
        lastSegmentLength = i - lastSlash - 1
      }
      lastSlash = i
      dots = 0
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots
    } else {
      dots = -1
    }
  }
  return res
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root
  var base =
    pathObject.base || (pathObject.name || '') + (pathObject.ext || '')
  if (!dir) {
    return base
  }
  if (dir === pathObject.root) {
    return dir + base
  }
  return dir + sep + base
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = ''
    var resolvedAbsolute = false
    var cwd

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i -= 1) {
      var path
      if (i >= 0) {
        path = arguments[i]
      } else {
        if (cwd === undefined) {
          cwd = posix.dirname(sketchSpecifics.cwd())
        }
        path = cwd
      }

      path = sketchSpecifics.getString(path, 'path')

      // Skip empty entries
      if (path.length === 0) {
        continue
      }

      resolvedPath = path + '/' + resolvedPath
      resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute)

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0) return '/' + resolvedPath
      else return '/'
    } else if (resolvedPath.length > 0) {
      return resolvedPath
    } else {
      return '.'
    }
  },

  normalize: function normalize(path) {
    path = sketchSpecifics.getString(path, 'path')

    if (path.length === 0) return '.'

    var isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH
    var trailingSeparator =
      path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH

    // Normalize the path
    path = normalizeString(path, !isAbsolute)

    if (path.length === 0 && !isAbsolute) path = '.'
    if (path.length > 0 && trailingSeparator) path += '/'

    if (isAbsolute) return '/' + path
    return path
  },

  isAbsolute: function isAbsolute(path) {
    path = sketchSpecifics.getString(path, 'path')
    return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH
  },

  join: function join() {
    if (arguments.length === 0) return '.'
    var joined
    for (var i = 0; i < arguments.length; i += 1) {
      var arg = arguments[i]
      arg = sketchSpecifics.getString(arg, 'path')
      if (arg.length > 0) {
        if (joined === undefined) joined = arg
        else joined += '/' + arg
      }
    }
    if (joined === undefined) return '.'
    return posix.normalize(joined)
  },

  relative: function relative(from, to) {
    from = sketchSpecifics.getString(from, 'from path')
    to = sketchSpecifics.getString(to, 'to path')

    if (from === to) return ''

    from = posix.resolve(from)
    to = posix.resolve(to)

    if (from === to) return ''

    // Trim any leading backslashes
    var fromStart = 1
    for (; fromStart < from.length; fromStart += 1) {
      if (from.charCodeAt(fromStart) !== CHAR_FORWARD_SLASH) break
    }
    var fromEnd = from.length
    var fromLen = fromEnd - fromStart

    // Trim any leading backslashes
    var toStart = 1
    for (; toStart < to.length; toStart += 1) {
      if (to.charCodeAt(toStart) !== CHAR_FORWARD_SLASH) break
    }
    var toEnd = to.length
    var toLen = toEnd - toStart

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen
    var lastCommonSep = -1
    var i = 0
    for (; i <= length; i += 1) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1)
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i)
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0
          }
        }
        break
      }
      var fromCode = from.charCodeAt(fromStart + i)
      var toCode = to.charCodeAt(toStart + i)
      if (fromCode !== toCode) break
      else if (fromCode === CHAR_FORWARD_SLASH) lastCommonSep = i
    }

    var out = ''
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; i += 1) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (out.length === 0) out += '..'
        else out += '/..'
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0) return out + to.slice(toStart + lastCommonSep)
    else {
      toStart += lastCommonSep
      if (to.charCodeAt(toStart) === CHAR_FORWARD_SLASH) toStart += 1
      return to.slice(toStart)
    }
  },

  toNamespacedPath: function toNamespacedPath(path) {
    // Non-op on posix systems
    return path
  },

  dirname: function dirname(path) {
    path = sketchSpecifics.getString(path, 'path')
    if (path.length === 0) return '.'
    var code = path.charCodeAt(0)
    var hasRoot = code === CHAR_FORWARD_SLASH
    var end = -1
    var matchedSlash = true
    for (var i = path.length - 1; i >= 1; i -= 1) {
      code = path.charCodeAt(i)
      if (code === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          end = i
          break
        }
      } else {
        // We saw the first non-path separator
        matchedSlash = false
      }
    }

    if (end === -1) return hasRoot ? '/' : '.'
    if (hasRoot && end === 1) return '//'
    return path.slice(0, end)
  },

  basename: function basename(path, ext) {
    if (ext !== undefined)
      ext = sketchSpecifics.getString(ext, 'ext')
    path = sketchSpecifics.getString(path, 'path')

    var start = 0
    var end = -1
    var matchedSlash = true
    var i

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return ''
      var extIdx = ext.length - 1
      var firstNonSlashEnd = -1
      for (i = path.length - 1; i >= 0; i -= 1) {
        var code = path.charCodeAt(i)
        if (code === CHAR_FORWARD_SLASH) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1
            break
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false
            firstNonSlashEnd = i + 1
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1
              end = firstNonSlashEnd
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd
      else if (end === -1) end = path.length
      return path.slice(start, end)
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1
            break
          }
        } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false
          end = i + 1
        }
      }

      if (end === -1) return ''
      return path.slice(start, end)
    }
  },

  extname: function extname(path) {
    path = sketchSpecifics.getString(path, 'path')
    var startDot = -1
    var startPart = 0
    var end = -1
    var matchedSlash = true
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i)
      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1
          break
        }
        continue
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false
        end = i + 1
      }
      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i
        else if (preDotState !== 1) preDotState = 1
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1
      }
    }

    if (
      startDot === -1 ||
      end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
    ) {
      return ''
    }
    return path.slice(startDot, end)
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new Error('pathObject should be an Object')
    }
    return _format('/', pathObject)
  },

  parse: function parse(path) {
    path = sketchSpecifics.getString(path, 'path')

    var ret = { root: '', dir: '', base: '', ext: '', name: '' }
    if (path.length === 0) return ret
    var code = path.charCodeAt(0)
    var isAbsolute = code === CHAR_FORWARD_SLASH
    var start
    if (isAbsolute) {
      ret.root = '/'
      start = 1
    } else {
      start = 0
    }
    var startDot = -1
    var startPart = 0
    var end = -1
    var matchedSlash = true
    var i = path.length - 1

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i)
      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1
          break
        }
        continue
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false
        end = i + 1
      }
      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i
        else if (preDotState !== 1) preDotState = 1
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1
      }
    }

    if (
      startDot === -1 ||
      end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
    ) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute)
          ret.base = ret.name = path.slice(1, end)
        else ret.base = ret.name = path.slice(startPart, end)
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot)
        ret.base = path.slice(1, end)
      } else {
        ret.name = path.slice(startPart, startDot)
        ret.base = path.slice(startPart, end)
      }
      ret.ext = path.slice(startDot, end)
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1)
    else if (isAbsolute) ret.dir = '/'

    return ret
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null,
}

posix.posix = posix

module.exports = posix


/***/ }),

/***/ "./node_modules/@skpm/path/sketch-specifics.js":
/*!*****************************************************!*\
  !*** ./node_modules/@skpm/path/sketch-specifics.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! util */ "util")

module.exports.getString = function getString(path, argumentName) {
  if (!util.isString(path)) {
    // let's make a special case for NSURL
    if (util.getNativeClass(path) === 'NSURL') {
      return String(path.path().copy())
    }
    throw new Error(argumentName + ' should be a string. Got ' + typeof path + ' instead.')
  }
  return String(path)
}

module.exports.cwd = function cwd() {
  if (typeof __command !== 'undefined' && __command.script() && __command.script().URL()) {
    return String(__command.script().URL().path().copy())
  }
  return String(MSPluginManager.defaultPluginURL().path().copy())
}


/***/ }),

/***/ "./node_modules/@skpm/timers/test-if-fiber.js":
/*!****************************************************!*\
  !*** ./node_modules/@skpm/timers/test-if-fiber.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  return typeof coscript !== 'undefined' && coscript.createFiber
}


/***/ }),

/***/ "./node_modules/@skpm/timers/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/@skpm/timers/timeout.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals coscript, sketch */
var fiberAvailable = __webpack_require__(/*! ./test-if-fiber */ "./node_modules/@skpm/timers/test-if-fiber.js")

var setTimeout
var clearTimeout

var fibers = []

if (fiberAvailable()) {
  var fibers = []

  setTimeout = function (func, delay, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
    // fibers takes care of keeping coscript around
    var id = fibers.length
    fibers.push(coscript.scheduleWithInterval_jsFunction(
      (delay || 0) / 1000,
      function () {
        func(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
      }
    ))
    return id
  }

  clearTimeout = function (id) {
    var timeout = fibers[id]
    if (timeout) {
      timeout.cancel() // fibers takes care of keeping coscript around
      fibers[id] = undefined // garbage collect the fiber
    }
  }
} else {
  setTimeout = function (func, delay, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
    coscript.shouldKeepAround = true
    var id = fibers.length
    fibers.push(true)
    coscript.scheduleWithInterval_jsFunction(
      (delay || 0) / 1000,
      function () {
        if (fibers[id]) { // if not cleared
          func(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
        }
        clearTimeout(id)
        if (fibers.every(function (_id) { return !_id })) { // if everything is cleared
          coscript.shouldKeepAround = false
        }
      }
    )
    return id
  }

  clearTimeout = function (id) {
    fibers[id] = false
  }
}

module.exports = {
  setTimeout: setTimeout,
  clearTimeout: clearTimeout
}


/***/ }),

/***/ "./node_modules/cocoascript-class/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/cocoascript-class/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuperCall = undefined;
exports.default = ObjCClass;

var _runtime = __webpack_require__(/*! ./runtime.js */ "./node_modules/cocoascript-class/lib/runtime.js");

exports.SuperCall = _runtime.SuperCall;

// super when returnType is id and args are void
// id objc_msgSendSuper(struct objc_super *super, SEL op, void)

const SuperInit = (0, _runtime.SuperCall)(NSStringFromSelector("init"), [], { type: "@" });

// Returns a real ObjC class. No need to use new.
function ObjCClass(defn) {
  const superclass = defn.superclass || NSObject;
  const className = (defn.className || defn.classname || "ObjCClass") + NSUUID.UUID().UUIDString();
  const reserved = new Set(['className', 'classname', 'superclass']);
  var cls = MOClassDescription.allocateDescriptionForClassWithName_superclass_(className, superclass);
  // Add each handler to the class description
  const ivars = [];
  for (var key in defn) {
    const v = defn[key];
    if (typeof v == 'function' && key !== 'init') {
      var selector = NSSelectorFromString(key);
      cls.addInstanceMethodWithSelector_function_(selector, v);
    } else if (!reserved.has(key)) {
      ivars.push(key);
      cls.addInstanceVariableWithName_typeEncoding(key, "@");
    }
  }

  cls.addInstanceMethodWithSelector_function_(NSSelectorFromString('init'), function () {
    const self = SuperInit.call(this);
    ivars.map(name => {
      Object.defineProperty(self, name, {
        get() {
          return getIvar(self, name);
        },
        set(v) {
          (0, _runtime.object_setInstanceVariable)(self, name, v);
        }
      });
      self[name] = defn[name];
    });
    // If there is a passsed-in init funciton, call it now.
    if (typeof defn.init == 'function') defn.init.call(this);
    return self;
  });

  return cls.registerClass();
};

function getIvar(obj, name) {
  const retPtr = MOPointer.new();
  (0, _runtime.object_getInstanceVariable)(obj, name, retPtr);
  return retPtr.value().retain().autorelease();
}

/***/ }),

/***/ "./node_modules/cocoascript-class/lib/runtime.js":
/*!*******************************************************!*\
  !*** ./node_modules/cocoascript-class/lib/runtime.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuperCall = SuperCall;
exports.CFunc = CFunc;
const objc_super_typeEncoding = '{objc_super="receiver"@"super_class"#}';

// You can store this to call your function. this must be bound to the current instance.
function SuperCall(selector, argTypes, returnType) {
  const func = CFunc("objc_msgSendSuper", [{ type: '^' + objc_super_typeEncoding }, { type: ":" }, ...argTypes], returnType);
  return function (...args) {
    const struct = make_objc_super(this, this.superclass());
    const structPtr = MOPointer.alloc().initWithValue_(struct);
    return func(structPtr, selector, ...args);
  };
}

// Recursively create a MOStruct
function makeStruct(def) {
  if (typeof def !== 'object' || Object.keys(def).length == 0) {
    return def;
  }
  const name = Object.keys(def)[0];
  const values = def[name];

  const structure = MOStruct.structureWithName_memberNames_runtime(name, Object.keys(values), Mocha.sharedRuntime());

  Object.keys(values).map(member => {
    structure[member] = makeStruct(values[member]);
  });

  return structure;
}

function make_objc_super(self, cls) {
  return makeStruct({
    objc_super: {
      receiver: self,
      super_class: cls
    }
  });
}

// Due to particularities of the JS bridge, we can't call into MOBridgeSupport objects directly
// But, we can ask key value coding to do the dirty work for us ;)
function setKeys(o, d) {
  const funcDict = NSMutableDictionary.dictionary();
  funcDict.o = o;
  Object.keys(d).map(k => funcDict.setValue_forKeyPath(d[k], "o." + k));
}

// Use any C function, not just ones with BridgeSupport
function CFunc(name, args, retVal) {
  function makeArgument(a) {
    if (!a) return null;
    const arg = MOBridgeSupportArgument.alloc().init();
    setKeys(arg, {
      type64: a.type
    });
    return arg;
  }
  const func = MOBridgeSupportFunction.alloc().init();
  setKeys(func, {
    name: name,
    arguments: args.map(makeArgument),
    returnValue: makeArgument(retVal)
  });
  return func;
}

/*
@encode(char*) = "*"
@encode(id) = "@"
@encode(Class) = "#"
@encode(void*) = "^v"
@encode(CGRect) = "{CGRect={CGPoint=dd}{CGSize=dd}}"
@encode(SEL) = ":"
*/

function addStructToBridgeSupport(key, structDef) {
  // OK, so this is probably the nastiest hack in this file.
  // We go modify MOBridgeSupportController behind its back and use kvc to add our own definition
  // There isn't another API for this though. So the only other way would be to make a real bridgesupport file.
  const symbols = MOBridgeSupportController.sharedController().valueForKey('symbols');
  if (!symbols) throw Error("Something has changed within bridge support so we can't add our definitions");
  // If someone already added this definition, don't re-register it.
  if (symbols[key] !== null) return;
  const def = MOBridgeSupportStruct.alloc().init();
  setKeys(def, {
    name: key,
    type: structDef.type
  });
  symbols[key] = def;
};

// This assumes the ivar is an object type. Return value is pretty useless.
const object_getInstanceVariable = exports.object_getInstanceVariable = CFunc("object_getInstanceVariable", [{ type: "@" }, { type: '*' }, { type: "^@" }], { type: "^{objc_ivar=}" });
// Again, ivar is of object type
const object_setInstanceVariable = exports.object_setInstanceVariable = CFunc("object_setInstanceVariable", [{ type: "@" }, { type: '*' }, { type: "@" }], { type: "^{objc_ivar=}" });

// We need Mocha to understand what an objc_super is so we can use it as a function argument
addStructToBridgeSupport('objc_super', { type: objc_super_typeEncoding });

/***/ }),

/***/ "./src/slice-it.js":
/*!*************************!*\
  !*** ./src/slice-it.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skpm_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skpm/fs */ "./node_modules/@skpm/fs/index.js");
/* harmony import */ var _skpm_fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skpm_fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _skpm_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skpm/path */ "./node_modules/@skpm/path/index.js");
/* harmony import */ var _skpm_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skpm_path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _skpm_child_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skpm/child_process */ "./node_modules/@skpm/child_process/index.js");
/* harmony import */ var _skpm_child_process__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_skpm_child_process__WEBPACK_IMPORTED_MODULE_3__);



 // documentation: https://developer.sketchapp.com/reference/api/

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var filePath = context.document.fileURL();
  var filePathStr = filePath.toString();

  if (filePathStr.indexOf("file://") !== -1) {
    filePathStr = filePath.toString().replace("file://", "");
    var filePathDir = "".concat(_skpm_path__WEBPACK_IMPORTED_MODULE_2___default.a.dirname(filePathStr), "/slices");
    Object(_skpm_fs__WEBPACK_IMPORTED_MODULE_1__["mkdirSync"])(filePathDir);
    var result = Object(_skpm_child_process__WEBPACK_IMPORTED_MODULE_3__["execSync"])("/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool export slices ".concat(filePathStr, " --output=").concat(filePathDir, " --formats=jpg,png,svg")).toString();
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Slice it done, Success 🙌");
  } else {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("😢 Supported only local file, Cloud will come later");
  }
});

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=slice-it.js.map