/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
    val: number;
    left: TreeNode | null
    right: TreeNode | null
}

function maxDepth(root: TreeNode | null): number {
    const maxDepth = 0;
    return traverseTree(root, maxDepth);
};

const traverseTree = (node: TreeNode | null, currentHeight: number): number => {
    if (node) {
        const newMaxHeight = currentHeight + 1;
        return Math.max(traverseTree(node.left, newMaxHeight), traverseTree(node.right, newMaxHeight))
    } else {
        return currentHeight;
    }
}