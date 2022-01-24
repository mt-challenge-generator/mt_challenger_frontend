import { Tokenizer } from 'nlp-tokenizer' // NNTokenizer, WordPieceTokenizer
import { PLUS } from '../utils'

export function tokenizeSentence(inputSentence) {

  let tokenizer = new Tokenizer()

  // list of tokens and "+" signs in between
  const tokens_plus = new Array();

  // tokenize sentence
  const tokens = tokenizer.tokenize( inputSentence );

  // populate list of tokens
  let tLen = tokens.length;
  for (let i = 0; i < tLen; i++) {
    tokens_plus.push(PLUS);
    tokens_plus.push(tokens[i]);
  }
  tokens_plus.push(PLUS)

  return tokens_plus.map(token => { 
    return {
      label: token,
      bucket: token === PLUS ? [] : [token],
      is_selected: false
    }})
}

// helper function
function _generateSentences2(a, b) {
  return [].concat(...a.map(d => b.map(e => [].concat(d, e).join(' '))));
}

// function to generate all sentences with different possible combinations
function _generateSentences(a, b, ...c) {
  return (b ? _generateSentences(_generateSentences2(a, b), ...c) : a);
}

// function to extract buckets from list and expand
export function generateSentences(itemList) {
    let bucketList = itemList.map(({bucket})=>bucket);
    const bucketListFilt = bucketList.filter((element) => { return element.length > 0;})
    return _generateSentences(...bucketListFilt).map(sentence => { return {source: sentence}})
}

// toggle the 'is_selected' property of the item at the given index and deselects all the other items in the list
export function deselect_all_else(itemList, index=-1) {
  if (index<0 || index>=itemList.length) {
    for (let item of itemList) {
      item.is_selected = false
    }
  }
  else {
    for (let i=0; i<index; i++) {
      itemList[i].is_selected = false
    }
    itemList[index].is_selected = !itemList[index].is_selected
    for (let i=index+1; i<itemList.length; i++) {
      itemList[i].is_selected = false
    }
  }
}