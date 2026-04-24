/** Same Beacons wordmark asset as the public marketing site (Framer CDN). */
export const BEACONS_FRAMER_CDN = "https://beacons.ai/_framerusercontent/images";

export const BEACONS_WORDMARK_FILE = "HymXJwVpqNNxOplRg4lKlnqzByw.png";

export function beaconsWordmarkUrl(width = 816) {
  return `${BEACONS_FRAMER_CDN}/${BEACONS_WORDMARK_FILE}?width=${width}&quality=85`;
}
