// Async.swift
// Created by Tobias DM on 15/07/14.
// OS X 10.10+ and iOS 8.0+
// Only use with ARC
// The MIT License (MIT)
// Copyright (c) 2014 Tobias Due Munk


import Foundation


// MARK: - DSL for GCD queues

private class GCD {

    /* dispatch_get_queue() */
    class func mainQueue() -> dispatch_queue_t {
        return dispatch_get_main_queue()
        // Don't ever use dispatch_get_global_queue(qos_class_main(), 0) re https://gist.github.com/duemunk/34babc7ca8150ff81844
    }
    class func userInteractiveQueue() -> dispatch_queue_t {
        return dispatch_get_global_queue(QOS_CLASS_USER_INTERACTIVE, 0)
    }
    class func userInitiatedQueue() -> dispatch_queue_t {
         return dispatch_get_global_queue(QOS_CLASS_USER_INITIATED, 0)
    }
    class func utilityQueue() -> dispatch_queue_t {
        return dispatch_get_global_queue(QOS_CLASS_UTILITY, 0)
    }
    class func backgroundQueue() -> dispatch_queue_t {
        return dispatch_get_global_queue(QOS_CLASS_BACKGROUND, 0)
    }
}


// MARK: - Async – Struct

public struct Async {

    private let block: dispatch_block_t

    private init(_ block: dispatch_block_t) {
        self.block = block
    }
}


// MARK: - Async – Static methods

public extension Async { // Static methods


    /* dispatch_async() */

    private static func async(block: dispatch_block_t, inQueue queue: dispatch_queue_t) -> Async {
        // Create a new block (Qos Class) from block to allow adding a notification to it later (see matching regular Async methods)
        // Create block with the "inherit" type
        let _block = dispatch_block_create(DISPATCH_BLOCK_INHERIT_QOS_CLASS, block)
        // Add block to queue
        dispatch_async(queue, _block)
        // Wrap block in a struct since dispatch_block_t can't be extended
        return Async(_block)
    }
    static func main(block: dispatch_block_t) -> Async {
        return Async.async(block, inQueue: GCD.mainQueue())
    }
    static func userInteractive(block: dispatch_block_t) -> Async {
        return Async.async(block, inQueue: GCD.userInteractiveQueue())
    }
    static func userInitiated(block: dispatch_block_t) -> Async {
        return Async.async(block, inQueue: GCD.userInitiatedQueue())
    }
    static func utility(block: dispatch_block_t) -> Async {
        return Async.async(block, inQueue: GCD.utilityQueue())
    }
    static func background(block: dispatch_block_t) -> Async {
        return Async.async(block, inQueue: GCD.backgroundQueue())
    }
    static func customQueue(queue: dispatch_queue_t, block: dispatch_block_t) -> Async {
        return Async.async(block, inQueue: queue)
    }


    /* dispatch_after() */

    private static func after(seconds: Double, block: dispatch_block_t, inQueue queue: dispatch_queue_t) -> Async {
        let nanoSeconds = Int64(seconds * Double(NSEC_PER_SEC))
        let time = dispatch_time(DISPATCH_TIME_NOW, nanoSeconds)
        return at(time, block: block, inQueue: queue)
    }
    private static func at(time: dispatch_time_t, block: dispatch_block_t, inQueue queue: dispatch_queue_t) -> Async {
        // See Async.async() for comments
        let _block = dispatch_block_create(DISPATCH_BLOCK_INHERIT_QOS_CLASS, block)
        dispatch_after(time, queue, _block)
        return Async(_block)
    }
    static func main(#after: Double, block: dispatch_block_t) -> Async {
        return Async.after(after, block: block, inQueue: GCD.mainQueue())
    }
    static func userInteractive(#after: Double, block: dispatch_block_t) -> Async {
        return Async.after(after, block: block, inQueue: GCD.userInteractiveQueue())
    }
    static func userInitiated(#after: Double, block: dispatch_block_t) -> Async {
        return Async.after(after, block: block, inQueue: GCD.userInitiatedQueue())
    }
    static func utility(#after: Double, block: dispatch_block_t) -> Async {
        return Async.after(after, block: block, inQueue: GCD.utilityQueue())
    }
    static func background(#after: Double, block: dispatch_block_t) -> Async {
        return Async.after(after, block: block, inQueue: GCD.backgroundQueue())
    }
    static func customQueue(#after: Double, queue: dispatch_queue_t, block: dispatch_block_t) -> Async {
        return Async.after(after, block: block, inQueue: queue)
    }
}
