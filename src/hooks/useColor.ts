export default function useColor() {
  return {
    textColor,
  }
}

function textColor(color?: string): 'white' | 'black' | undefined {
  if (color === undefined) {
    return undefined
  }
  const red = parseInt(color.substring(1, 3), 16)
  const green = parseInt(color.substring(3, 5), 16)
  const blue = parseInt(color.substring(5, 7), 16)
  console.log(red, green, blue)

  // sRGB を RGB に変換し、背景色の相対輝度を求める
  const toRgbItem = (item: number) => {
    const i = item / 255
    return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4)
  }
  const R = toRgbItem(red)
  const G = toRgbItem(green)
  const B = toRgbItem(blue)
  const Lbg = 0.2126 * R + 0.7152 * G + 0.0722 * B

  // 白と黒の相対輝度。定義からそれぞれ 1 と 0 になる。
  const Lw = 1
  const Lb = 0

  // 白と背景色のコントラスト比、黒と背景色のコントラスト比を
  // それぞれ求める。
  const Cw = (Lw + 0.05) / (Lbg + 0.05)
  const Cb = (Lbg + 0.05) / (Lb + 0.05)

  // コントラスト比が大きい方を文字色として返す。
  return Cw < Cb ? 'black' : 'white'
}
