// Very simple suggester based on a fixed list of strings.
export class FixedStringsSuggester {
  constructor(strings) {
    this.strings = strings;
  }

  // Return a promise for a suggestion set.
  suggest(query) {
    return new Promise().resolve(suggestInternal(query));
  }

  // Return a suggestion set.
  suggestInternal(query) {
    // TODO(fergald): Stop after N?
    var candidates = [];
    for (var string of this.strings) {
      if (string.startsWith(query)) {
        candidates.push({"suggestedQuery": string});
      }
    }
    return candidates;
  }
}
