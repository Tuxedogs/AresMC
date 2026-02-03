import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function CapacitorPage() {
  return (
    <>
      <PDFSection 
        title="Capacitor Management" 
        subtitle="Understanding when to shoot and when to conserve"
        level={1}
      >
        <p>
          Alright now here is the tricky part of turret gunnery. How to manage your capacitor and how to keep bullets 
          moving down range. I'll be frank here, the majority of this is something that you learn from experience. 
          Getting to know how your turret shoots, how your gimbal tracks, and how your pilot flies all contribute to 
          when you should be shooting. About the best I can do here is to give some tips.
        </p>

        <PDFCallout type="warning" title="For Pilots">
          Please cut down on the excessive rolling, your gunner will thank you. At best your gunner has a 180-degree arc, 
          360-degree rotation, and a 90-degree vertical, around the top of the ship.
        </PDFCallout>

        <p>
          Most ships have lesser degrees of these movements, most importantly several ships lack the 90-degree vertical. 
          Knowing what areas your gunner's turret can shoot is vital for positioning your ship for maximum effect. Also 
          as of the 4.3 patch the gyro system on turrets does not account for roll so when you do it'll throw them off 
          target.
        </p>

        <PDFCallout type="important" title="For Gunners">
          Get used to using the auto and manual gimbals your turret has access to.
        </PDFCallout>

        <p>
          The Auto gimbal is one of the main benefits of using a turret. Though at times and on some ships entirely 
          that 'auto' feature can also hinder you and make your shots miss. Work around this. Learn when your auto 
          gimbal is likely to miss shots and hold off. This allows you to save the shots you would have missed and some 
          charge back to your capacitor, allowing you to stay effective longer.
        </p>

        <p>
          Once you have a bit of combat experience you'll get used to fighter movements and can start to predict when a 
          fighter's maneuvers are slowing enough for you to hit them (again like delta this is relative to your ship and 
          how your pilot flies). One example I can give is similar to 'Pip neutralization' for fighters. When both your 
          ship and the target are maneuvering your shots tend to not connect. It's easier to hit a target if their 
          lateral or vertical movement is effectively 0 or 'Neutralized'.
        </p>

        <div className="bg-indigo-950/20 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h3 className="text-xl font-medium text-indigo-400 mb-3">Deep Dive: 6 Degrees of Freedom</h3>
          
          <p className="text-sm leading-relaxed mb-3">
            This is going deep so try to stay with me here. Ships move in 3 axes (X Y Z) or 6 degrees of freedom (6DOF). 
            (X axis is Forwards & back / Y is Left & right / Z is Up & down). Now here is the tricky part (and why 
            reading delta is so important) the best way to judge a target's Y axis is the distance from them and their 
            delta.
          </p>

          <p className="text-sm leading-relaxed mb-3">
            For now, let's ignore the delta and talk about X and Y. If your ship is moving negatively on the Y axis and 
            the target is moving positively, then you are moving in opposite directions, and same for the X and Z axis.
          </p>

          <p className="text-sm leading-relaxed mb-3">
            The auto gimbal of the turret is both smart and dumb at times. The 'auto' function of the gimbal tracks a 
            target's current inertia and distance to lead your shots. The problem with that though is that when your 
            shots take second(s) to reach a target they can easily have changed their inertia vector and your shots will 
            not hit.
          </p>

          <p className="text-sm leading-relaxed mb-3">
            This is also why when in high-speed maneuvers your shots will also miss the vast majority of the time, no 
            matter your distance to the target. The auto gimbal has a hard time tracking both your ship's and the target 
            ship's inertia vectors at the same time, thus causing you to miss.
          </p>

          <PDFCallout type="info">
            This can be alleviated with the manual gimbal mode but you have to be quick on the draw and be confident 
            in your crosshair placement. That's why I have been advocating for practice, practice, practice with your 
            pilot so you can get a hang of it.
          </PDFCallout>
        </div>
      </PDFSection>
    </>
  );
}
