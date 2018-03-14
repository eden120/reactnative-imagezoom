import { ViewStyle } from "react-native"

export interface ICenterOn {
  x: number
  y: number
  scale: number
  duration: number
}

export class Props {

  public cropWidth: number = 100

  public cropHeight: number = 100

  public imageWidth: number = 100

  public imageHeight: number = 100

  public panToMove?: boolean = true

  public pinchToZoom?: boolean = true

  public clickDistance?: number = 10

  public maxOverflow?: number = 100

  public longPressTime?: number = 800

  public doubleClickInterval?: number = 175

  /**
   * If provided this will cause the view to zoom and pan to the center point
   * Duration is optional and defaults to 300 ms.
   */
  public centerOn?: ICenterOn

  public style?: ViewStyle = {}
  
  public onClick?: () => void = () => {
    //
  }

  public onDoubleClick?: () => void = () => {
    //
  }

  public onLongPress?: () => void = () => {
    //
  }

  public horizontalOuterRangeOffset?: (offsetX?: number) => void = () => {
    //
  }

  public onDragLeft?: () => void = () => {
    //
  }

  public responderRelease?: (vx?: number, scale?: number) => void = () => {
    //
  }

  public onMove?: (position?: object) => void = () => {
    //
  }

  /**
   * If provided, this method will be called when the onLayout event fires
   */
  public layoutChange?: (event?: object) => void = () => {
    //
  }
}

export class State {

  public centerX?: number = 0.5

  public centerY?: number = 0.5
}
