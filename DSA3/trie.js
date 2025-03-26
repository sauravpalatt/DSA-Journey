
class TrieNode{
    constructor(){
        this.children = {} 
        this.isWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){   //apple
        let currentNode = this.root

        for(let i=0;i<word.length;i++){
            let char = word[i]
            if(!currentNode.children[char]){
                currentNode.children[char] = new TrieNode()
            }
            currentNode =  currentNode.children[char]
        }
        currentNode.isWord = true
    }

    search(word){
        let currentNode = this.root

        for(let i=0;i<word.length;i++){
            let char = word[i]
            if(!currentNode.children[char]) return false
            currentNode = currentNode.children[char]
        }
        return currentNode.isWord
    }
}  

let trie = new Trie()

trie.insert("APPLE")
trie.insert("BANANA")

console.log(trie.search("APPL"))

class TrieNode {
    constructor() {
        this.children = {};  // Stores character nodes
        this.isEndOfWord = false;  // Marks end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    searchPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return null;
            node = node.children[char];
        }
        return node;
    }

    getWordsFromNode(node, prefix, suggestions) {
        if (node.isEndOfWord) suggestions.push(prefix);
        for (let char in node.children) {
            this.getWordsFromNode(node.children[char], prefix + char, suggestions);
        }
    }

    autocomplete(prefix) {
        let node = this.searchPrefix(prefix);
        if (!node) return [];
        let suggestions = [];
        this.getWordsFromNode(node, prefix, suggestions);
        return suggestions;
    }
}

// Example Usage:
let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("bat");
trie.insert("banana");

console.log(trie.autocomplete("ap"));  
console.log(trie.searchPrefix("ba"));  
console.log(trie.autocomplete("c"));   


class TrieNode{
    constructor(){
        this.children = {}
        this.lastWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.lastWord = true
    }

    autoComplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return []; // No suggestions
            }
            node = node.children[char];
        }
        return this.collectWords(node, prefix);
    }

    // Helper function to collect words from a given node
    collectWords(node, prefix) {
        let results = [];
        if (node.isEndOfWord) results.push(prefix);

        for (let char in node.children) {
            results.push(...this.collectWords(node.children[char], prefix + char));
        }
        return results;
    }
}