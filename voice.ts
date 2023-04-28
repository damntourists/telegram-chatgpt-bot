// TODO: Finish
//
// - Voice list: https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support?tabs=tts
// - Voice demo: https://speech.microsoft.com/portal/voicegallery
//
// This maps 2-letter language code into default voices. I use this to automatically change
// the voice if the bot is responding in a language different from the one configured at `chat.voice`.
//
// * = I chose these voices because they sound the best to me. Otherwise, I use the first female/male voice
// on Azure's voice list.
const DEFAULT_VOICES: Record<string, string[]> = {
    // Arabic
    ar: ['ar-EG-SalmaNeural ', 'ar-EG-ShakirNeural'],
    // Dutch
    nl: ['nl-NL-ColetteNeural', 'nl-NL-MaartenNeural'],
    // French
    fr: ['fr-FR-BrigitteNeural', 'fr-FR-AlainNeural'],
    // German
    de: ['de-DE-AmalaNeural', 'de-DE-BerndNeural'],
    // Italian
    it: ['it-IT-ElsaNeural', 'it-IT-BenignoNeural'],
    // Portuguese
    pt: ['pt-BR-BrendaNeural', 'pt-BR-AntonioNeural'],
    // Russian
    ru: ['ru-RU-DariyaNeural', 'ru-RU-DmitryNeural'],
    // Spanish
    es: [
        'es-HN-KarlaNeural', // * More animated than default
        'es-MX-CecilioNeural',
    ],
    // English
    en: [
        'en-US-JaneNeural', // * More fun than Jenny
        'en-US-BrandonNeural',
        'en-US-TonyNeural'
    ],
    // Japanese
    ja: ['ja-JP-AoiNeural', 'ja-JP-DaichiNeural'],
    // Korean
    ko: ['ko-KR-JiMinNeural', 'ko-KR-BongJinNeural'],
}

export const DEFAULT_VOICE = DEFAULT_VOICES.en[-1]

export function voiceFromLanguageCode(code: string): string | undefined {
    const match = DEFAULT_VOICES[code.toLowerCase()]
    if (match === undefined) return
    const [female] = match
    return female
}
